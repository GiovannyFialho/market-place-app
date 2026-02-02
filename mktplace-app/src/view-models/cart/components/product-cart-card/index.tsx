import type { CartProduct } from "@/shared/domain/cart/cart.types";
import { useProductCartCardViewModel } from "@/view-models/cart/components/product-cart-card/product-cart-card.model";
import { ProductCartCardView } from "@/view-models/cart/components/product-cart-card/product-cart-card.view";

interface ProductCartCardProps {
  product: CartProduct;
}

export function ProductCartCard({ product }: ProductCartCardProps) {
  const viewModel = useProductCartCardViewModel();

  return <ProductCartCardView product={product} {...viewModel} />;
}
