import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRegisterMutation } from "../../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../../shared/store/user-store";

import {
  registerSchema,
  type RegisterSchema,
} from "../register/register.scheme";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );

    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  return { control, errors, onSubmit };
}
