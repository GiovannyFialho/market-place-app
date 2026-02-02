import { useCartStore } from "@/shared/store/cart-store";

export function useProductCartCardViewModel() {
  const { updateQuantity } = useCartStore();

  function handleDecrement(productId: number, quantity: number) {
    updateQuantity({ productId, quantity: quantity - 1 });
  }

  function handleIncrement(productId: number, quantity: number) {
    updateQuantity({ productId, quantity: quantity + 1 });
  }

  return { handleDecrement, handleIncrement };
}
