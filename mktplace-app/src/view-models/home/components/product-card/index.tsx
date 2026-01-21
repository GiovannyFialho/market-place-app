import type { ProductInterface } from "@/shared/interfaces/product";

import { useProductCardViewModel } from "@/view-models/home/components/product-card/product-card.model";
import { ProductCardView } from "@/view-models/home/components/product-card/product-card.view";

interface ProductCardProps {
  product: ProductInterface;
}

export function ProductCard(props: ProductCardProps) {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
}
