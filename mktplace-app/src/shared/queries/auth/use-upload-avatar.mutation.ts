import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";

import { uploadAvatar } from "@/shared/services/auth.service";
import { useUserStore } from "@/shared/store/user-store";

export function useUploadAvatarMutation() {
  const { updateUser } = useUserStore();

  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      updateUser({ avatarUrl: response.url });
    },
    onError: (error) => {
      console.log({ errorUploadAvatar: error });
      Toast.error("Erro ao fazer upload da foto de perfil");
    },
  });

  return mutation;
}
