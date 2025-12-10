import { baseURL, marketPlaceAPIClient } from "../api/market-place";

import type { AuthResponse } from "../interfaces/http/auth-response";
import type { SignInHttpParams } from "../interfaces/http/sign-in";
import type {
  SignUpHttpParams,
  SignUpHttpResponse,
} from "../interfaces/http/sign-up";
import { UploadAvatarResponse } from "../interfaces/http/upload-avatar";

export async function signUp(userData: SignUpHttpParams) {
  const { data } = await marketPlaceAPIClient.post<SignUpHttpResponse>(
    "/auth/register",
    userData
  );

  return data;
}

export const signIn = async (userData: SignInHttpParams) => {
  const { data } = await marketPlaceAPIClient.post<AuthResponse>(
    "/auth/login",
    userData
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
    formData
  );

  console.log({ url: data.url });

  data.url = `${baseURL}${data.url}`;

  return data;
};
