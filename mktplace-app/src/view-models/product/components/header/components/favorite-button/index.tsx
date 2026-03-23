import { useFavoriteButtonViewModel } from "@/view-models/product/components/header/components/favorite-button/favorite-button.model";
import { FavoriteButtonView } from "@/view-models/product/components/header/components/favorite-button/favorite-button.view";

interface FavoriteButtonProps {
  productId: number;
}

export function FavoriteButton({ productId }: FavoriteButtonProps) {
  const viewModel = useFavoriteButtonViewModel(productId);

  return <FavoriteButtonView {...viewModel} />;
}
