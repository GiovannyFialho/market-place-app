import { useCartViewModel } from "@/view-models/cart/cart.model";
import { CartView } from "@/view-models/cart/cart.view";

export default function Cart() {
  const viewModel = useCartViewModel();

  return <CartView {...viewModel} />;
}
