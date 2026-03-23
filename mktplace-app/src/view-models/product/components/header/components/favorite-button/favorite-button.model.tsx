import { useMemo } from "react";

import { useAddFavoriteMutation } from "@/shared/queries/favorites/use-add-favorite.mutation";
import { useGetFavoritesQuery } from "@/shared/queries/favorites/use-get-favorites.query";
import { useRemoveFavoriteMutation } from "@/shared/queries/favorites/use-remove-favorite.mutation";

export function useFavoriteButtonViewModel(productId: number) {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery();

  const isFavorite: boolean = useMemo(() => {
    return favorites.some((product) => product.id === productId);
  }, [favorites, productId]);

  const addFavoriteMutation = useAddFavoriteMutation();

  const removeFavoriteMutation = useRemoveFavoriteMutation();

  const loading =
    addFavoriteMutation.isPending ||
    removeFavoriteMutation.isPending ||
    isLoadingFavorites;

  async function handleToggleFavorite() {
    if (isLoadingFavorites) return;

    if (isFavorite) {
      await removeFavoriteMutation.mutateAsync(productId);
    } else {
      await addFavoriteMutation.mutateAsync(productId);
    }
  }

  return { isFavorite, loading, handleToggleFavorite };
}
