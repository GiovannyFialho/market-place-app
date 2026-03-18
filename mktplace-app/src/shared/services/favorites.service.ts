import { marketPlaceAPIClient } from "@/shared/api/market-place";

import type { Favorite } from "@/shared/interfaces/http/favorite";

export async function getFavorites() {
  const { data } = await marketPlaceAPIClient.get<Favorite[]>("/favorites");

  return data;
}

export async function addFavorite(productId: number) {
  await marketPlaceAPIClient.post("/favorites", { productId });
}

export async function removeFavorite(productId: number) {
  await marketPlaceAPIClient.delete(`/favorites/${productId}`);
}
