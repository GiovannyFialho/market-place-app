import { zodResolver } from "@hookform/resolvers/zod";
import { CameraType } from "expo-image-picker";
import { useForm } from "react-hook-form";

import { useSignUpMutation } from "../../shared/queries/auth/use-sign-up.mutation";
import { useUserStore } from "../../shared/store/user-store";

import { useImage } from "../../shared/hooks/useImage";

import { useState } from "react";
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation";
import { signUpSchema, type SignUpSchema } from "./sign-up.scheme";

export function useSignUpSchemaViewModel() {
  const { updateUser } = useUserStore();

  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSelectAvatar() {
    await handleSelectImage();
  }

  const uploadAvatarMutation = useUploadAvatarMutation();

  const userSignUpMutation = useSignUpMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri);

        updateUser({ avatarUrl: url });
      }
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...signUpData } = userData;

    await userSignUpMutation.mutateAsync(signUpData);
  });

  return { control, errors, onSubmit, handleSelectAvatar, avatarUri };
}
