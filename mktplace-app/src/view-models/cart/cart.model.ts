import { useCartStore } from "@/shared/store/cart-store";

export function useCartViewModel() {
  const { products } = useCartStore();

  return { products };
}
