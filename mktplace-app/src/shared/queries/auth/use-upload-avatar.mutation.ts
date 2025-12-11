import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";

import { uploadAvatar } from "../../services/auth.service";

export function useUploadAvatarMutation() {
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log({ responseImageUpload: response });
    },
    onError: (error) => {
      console.log({ errorUploadAvatar: error });
      Toast.error("Erro ao fazer upload da foto de perfil");
    },
  });

  return mutation;
}
