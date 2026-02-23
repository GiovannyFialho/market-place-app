import { zodResolver } from "@hookform/resolvers/zod";
import { CameraType } from "expo-image-picker";
import { useForm } from "react-hook-form";

import { useAppModal } from "@/shared/hooks/useAppModal";
import { useUpdateProfileMutation } from "@/shared/queries/profile/use-update-profile.mutation";
import { useUserStore } from "@/shared/store/user-store";

import { useImage } from "@/shared/hooks/useImage";
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar.mutation";
import { useCartStore } from "@/shared/store/cart-store";
import { useModalStore } from "@/shared/store/modal-store";

import {
  profileSchema,
  type ProfileFormData,
} from "@/view-models/profile/profile.scheme";

export function useProfileViewModel() {
  const { user, logout } = useUserStore();
  const { showSelection } = useAppModal();
  const { close } = useModalStore();
  const { clearCart } = useCartStore();

  const uploadAvatarMutation = useUploadAvatarMutation();
  const updateProfileMutation = useUpdateProfileMutation();

  const { loading, handleSelectImage } = useImage({
    callback: async (url) => {
      if (url) {
        await uploadAvatarMutation.mutateAsync(url);
      }
    },
    cameraType: CameraType.front,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      password: undefined,
      newPassword: undefined,
    },
  });

  const validatePasswords = (userData: ProfileFormData) => {
    if (!userData.password) return true;

    if (
      userData?.password === userData?.newPassword &&
      userData?.password?.length > 0
    ) {
      return false;
    }

    return true;
  };

  const handleLogout = () => {
    return showSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair da sua conta?",
      options: [
        {
          text: "Continuar logado",
          variant: "primary",
          onPress: close,
        },
        {
          text: "Sair",
          variant: "danger",
          onPress: () => {
            clearCart();
            close();
            logout();
          },
        },
      ],
    });
  };

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return;

    await updateProfileMutation.mutateAsync(userData);
  });

  return {
    control,
    avatarUri: user?.avatarUrl ?? null,
    isSubmitting,
    loading,
    onSubmit,
    handleLogout,
    handleSelectImage,
  };
}
