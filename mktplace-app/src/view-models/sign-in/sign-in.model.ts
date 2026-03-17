import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useOneSignal } from "@/shared/hooks/useOneSignal";
import { useSignInMutation } from "@/shared/queries/auth/use-sign-in.mutation";

import {
  signInSchema,
  SignInSchema,
} from "@/view-models/sign-in/sign-in.scheme";

export function useSignInSchemaViewModel() {
  const { playerId } = useOneSignal();

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
    await signInMutation.mutateAsync({
      ...userFormData,
      notificationToken: playerId,
    });
  });

  return { control, onSubmit, errors };
}
