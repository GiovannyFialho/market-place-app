import { marketPlaceAPIClient } from "../api/market-place";
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
