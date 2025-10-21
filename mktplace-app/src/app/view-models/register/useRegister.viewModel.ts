import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRegisterMutation } from "../../../shared/queries/auth/use-register.mutation";

import {
  registerSchema,
  type RegisterSchema,
} from "../register/register.scheme";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "Teste",
      email: "teste@teste.com",
      phone: "11111111111",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    await userRegisterMutation.mutateAsync(registerData);
  });

  return { control, errors, onSubmit };
}
