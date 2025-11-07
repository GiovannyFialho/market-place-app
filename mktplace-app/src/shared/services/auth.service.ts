import { marketPlaceAPIClient } from "../api/market-place";

import type { AuthResponse } from "../interfaces/http/auth-response";
import type { SignInHttpParams } from "../interfaces/http/sign-in";
import type {
  SignUpHttpParams,
  SignUpHttpResponse,
} from "../interfaces/http/sign-up";

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
