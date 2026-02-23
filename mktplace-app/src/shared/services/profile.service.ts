import { marketPlaceAPIClient } from "@/shared/api/market-place";
import {
  UpdateProfileParams,
  UpdateProfileResponse,
} from "@/shared/interfaces/http/update-profile";

export async function updateUserProfile(userData: UpdateProfileParams) {
  const { data } = await marketPlaceAPIClient.put<UpdateProfileResponse>(
    "/user",
    userData,
  );

  return data;
}
