import { useMutation } from "@tanstack/react-query";

import type { SignUpHttpParams } from "../../interfaces/http/sign-up";
import { signUp } from "../../services/auth.service";
import { useUserStore } from "../../store/user-store";

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
    onError: (error) => {
      console.log("signUp error:::: ", error);
    },
  });

  return mutation;
}
