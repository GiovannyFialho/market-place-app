import { useMutation } from "@tanstack/react-query";

import type { SignUpHttpParams } from "../../interfaces/http/sign-up";
import { signUp } from "../../services/auth.service";

export function useSignUpMutation() {
  const mutation = useMutation({
    mutationFn: (userData: SignUpHttpParams) => signUp(userData),
    onSuccess: (response) => {
      console.log({ response });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  return mutation;
}
