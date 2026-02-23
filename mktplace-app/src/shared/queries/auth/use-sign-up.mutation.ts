import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";

import type { SignUpHttpParams } from "@/shared/interfaces/http/sign-up";
import { signUp } from "@/shared/services/auth.service";
import { useUserStore } from "@/shared/store/user-store";

type UserRegisterMutationParams = {
  onSuccess?: () => void;
};

export function useSignUpMutation({
  onSuccess,
}: UserRegisterMutationParams = {}) {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: SignUpHttpParams) => signUp(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });

      onSuccess?.();
    },
    onError: (error: Error) => {
      Toast.error(error.message, "top");
    },
  });

  return mutation;
}
