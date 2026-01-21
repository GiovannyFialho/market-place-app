import { useMutation } from "@tanstack/react-query";

import { useUserStore } from "@/shared/store/user-store";

import type { SignUpHttpParams } from "@/shared/interfaces/http/sign-up";
import { signUp } from "@/shared/services/auth.service";

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
