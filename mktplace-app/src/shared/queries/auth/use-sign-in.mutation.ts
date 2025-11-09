import { useMutation } from "@tanstack/react-query";

import { useUserStore } from "../../store/user-store";

import type { SignInHttpParams } from "../../interfaces/http/sign-in";
import { signIn } from "../../services/auth.service";

export function useSignInMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: SignInHttpParams) => signIn(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  return mutation;
}
