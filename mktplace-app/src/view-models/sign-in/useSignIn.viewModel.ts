import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSignInMutation } from "../../shared/queries/auth/use-sign-in.mutation";

import { signInSchema, type SignInSchema } from "./sign-in.scheme";

export function useSignInSchemaViewModel() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useSignInMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await signInMutation.mutateAsync(userFormData);
  });

  return { control, onSubmit, errors };
}
