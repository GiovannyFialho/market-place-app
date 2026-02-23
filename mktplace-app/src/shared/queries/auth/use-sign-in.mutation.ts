import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";

import type { SignInHttpParams } from "@/shared/interfaces/http/sign-in";
import { signIn } from "@/shared/services/auth.service";
import { useUserStore } from "@/shared/store/user-store";

export function useSignInMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: SignInHttpParams) => signIn(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error: Error) => {
      Toast.error(error.message, "top");
    },
  });

  return mutation;
}
