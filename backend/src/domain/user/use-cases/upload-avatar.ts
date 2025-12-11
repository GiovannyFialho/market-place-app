import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { UserAvatarRepository } from "../../../infra/database/typeorm/market-place/repositories/user-avatar.repository";
import {
  IUploadUserAvatarUseCase,
  UploadUserAvatarRequest,
  UploadUserAvatarResponse,
} from "../repositoryInterface/upload-user-avatar.interface";

const pump = promisify(pipeline);

export class UploadUserAvatarUseCase implements IUploadUserAvatarUseCase {
  private userAvatarRepository: UserAvatarRepository;

  constructor() {
    this.userAvatarRepository = new UserAvatarRepository();
  }

  async execute(
    request: UploadUserAvatarRequest
  ): Promise<UploadUserAvatarResponse> {
    const { userId, file } = request;

    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/heic",
      "image/heif",
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new Error(
        "Formato de arquivo não suportado. Use JPEG, PNG, GIF ou WebP"
      );
    }

    try {
      let fileExtension = path.extname(
        file.originalname || file.filename || ""
      );

      if (!fileExtension) {
        const mimeMap: Record<string, string> = {
          "image/jpeg": ".jpg",
          "image/png": ".png",
          "image/gif": ".gif",
          "image/webp": ".webp",
          "image/heic": ".heic",
          "image/heif": ".heif",
        };

        fileExtension = mimeMap[file.mimetype] ?? ".jpg";
      }

      const fileName = `${randomUUID()}${fileExtension}`;

      const uploadDir = path.join(process.cwd(), "src/assets/images/avatars");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = path.join(uploadDir, fileName);
      const fileUrl = `/assets/images/avatars/${fileName}`;

      await pump(file.file, fs.createWriteStream(filePath));

      const existingAvatar = await this.userAvatarRepository.findByUserId(
        userId
      );

      let savedAvatar;
      if (existingAvatar) {
        await this.removeOldAvatarFile(existingAvatar.url);

        savedAvatar = await this.userAvatarRepository.update({
          id: existingAvatar.id,
          url: fileUrl,
          userId,
        });
      } else {
        savedAvatar = await this.userAvatarRepository.create({
          url: fileUrl,
          userId,
        });
      }

      return {
        filename: fileName,
        url: savedAvatar.url,
        message: "Avatar atualizado com sucesso",
      };
    } catch (error) {
      const fileName = `${randomUUID()}${path.extname(file.filename || "")}`;
      const filePath = path.join(
        process.cwd(),
        "src/assets/images/avatars",
        fileName
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      throw new Error(
        `Falha ao fazer upload do avatar: ${
          error instanceof Error ? error.message : "Erro desconhecido"
        }`
      );
    }
  }

  private async removeOldAvatarFile(oldUrl: string): Promise<void> {
    try {
      const fileName = path.basename(oldUrl);
      const filePath = path.join(
        process.cwd(),
        "src/assets/images/avatars",
        fileName
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.warn("Não foi possível remover o arquivo antigo:", error);
    }
  }
}
