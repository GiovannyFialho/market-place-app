import { useMutation } from "@tanstack/react-query";
import type { RegisterHttpParams } from "../../interfaces/http/register";
import { register } from "../../services/auth.service";

export function useRegisterMutation() {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => register(userData),
    onSuccess: (response) => {
      console.log({ response });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  return mutation;
}
