import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSignUpMutation } from "../../shared/queries/auth/use-sign-up.mutation";
import { useUserStore } from "../../shared/store/user-store";

import { useImage } from "../../shared/hooks/useImage";

import { signUpSchema, type SignUpSchema } from "./sign-up.scheme";

export function useSignUpSchemaViewModel() {
  const userSignUpMutation = useSignUpMutation();
  const { setSession } = useUserStore();

  const { handleSelectImage } = useImage();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSelectAvatar() {
    await handleSelectImage();
  }

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...signUpData } = userData;

    const mutationResponse = await userSignUpMutation.mutateAsync(signUpData);

    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  return { control, errors, onSubmit, handleSelectAvatar };
}
