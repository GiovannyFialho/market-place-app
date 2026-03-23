import { useMemo } from "react";

import { useGetFavoritesQuery } from "@/shared/queries/favorites/use-get-favorites.query";

export function useFavoriteButtonViewModel(productId: number) {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery();

  const isFavorite: boolean = useMemo(() => {
    return favorites.some((product) => product.id === productId);
  }, [favorites, productId]);

  return { isFavorite };
}
