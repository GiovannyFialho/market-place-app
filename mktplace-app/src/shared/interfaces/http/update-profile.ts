import { UserInterface } from "@/shared/interfaces/user";

export interface UpdateProfileParams {
  name: string;
  email: string;
  phone: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

export interface UpdateProfileResponse {
  user: UserInterface & {
    updatedAt: string;
    deletedAt?: string;
  };
}
