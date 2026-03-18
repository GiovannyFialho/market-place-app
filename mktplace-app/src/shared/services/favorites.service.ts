import { marketPlaceAPIClient } from "@/shared/api/market-place";

import type {
  AddFavoriteResponse,
  Favorite,
} from "@/shared/interfaces/http/favorite";

export async function getFavorites() {
  const { data } = await marketPlaceAPIClient.get<Favorite[]>("/favorites");

  return data;
}

export async function addFavorite(productId: number) {
  const { data } = await marketPlaceAPIClient.post<AddFavoriteResponse>(
    "/favorites",
    { productId },
  );

  return data;
}

export async function removeFavorite(productId: number) {
  await marketPlaceAPIClient.delete(`/favorites/${productId}`);
}
