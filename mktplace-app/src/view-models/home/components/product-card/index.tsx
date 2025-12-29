import { ProductInterface } from "../../../../shared/interfaces/product";

import { ProductCardView } from "./product-card.view";
import { useProductCardViewModel } from "./useProductCard.model";

interface ProductCardProps {
  product: ProductInterface;
}

export function ProductCard(props: ProductCardProps) {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
}
