import { baseURL, marketPlaceAPIClient } from "@/shared/api/market-place";

import type { AuthResponse } from "@/shared/interfaces/http/auth-response";
import type { SignInHttpParams } from "@/shared/interfaces/http/sign-in";
import type {
  SignUpHttpParams,
  SignUpHttpResponse,
} from "@/shared/interfaces/http/sign-up";
import type { UploadAvatarResponse } from "@/shared/interfaces/http/upload-avatar";

export async function signUp(userData: SignUpHttpParams) {
  const { data } = await marketPlaceAPIClient.post<SignUpHttpResponse>(
    "/auth/register",
    userData,
  );

  return data;
}

export const signIn = async (userData: SignInHttpParams) => {
  const { data } = await marketPlaceAPIClient.post<AuthResponse>(
    "/auth/login",
    userData,
  );

  return data;
};

export const uploadAvatar = async (avatarUri: string) => {
  const formData = new FormData();

  formData.append("avatar", {
    uri: avatarUri,
    type: "image/jpeg",
    name: "avatar.jpeg",
  } as unknown as Blob);

  const { data } = await marketPlaceAPIClient.post<UploadAvatarResponse>(
    "/user/avatar",
    formData,
  );

  data.url = `${baseURL}${data.url}`;

  return data;
};
