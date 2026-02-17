import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useUserStore } from "@/shared/store/user-store";

import {
  profileSchema,
  type ProfileFormData,
} from "@/view-models/profile/profile.scheme";

export function useProfileViewModel() {
  const { user } = useUserStore();

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      newPassword: undefined,
      confirmNewPassword: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { control, avatarUri, onSubmit };
}
