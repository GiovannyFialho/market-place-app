import { useMutation } from "@tanstack/react-query";

import type { SignInHttpParams } from "../../interfaces/http/sign-in";
import { signIn } from "../../services/auth.service";

export function useSignInMutation() {
  const mutation = useMutation({
    mutationFn: (userData: SignInHttpParams) => signIn(userData),
    onSuccess: (response) => {
      console.log({ response });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  return mutation;
}
