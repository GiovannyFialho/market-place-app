import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signInSchema, type SignInSchema } from "./sign-in.scheme";

export function useSignInSchemaViewModel() {
  const {
    control,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return { control, errors };
}
