import { CreditCard } from "@/shared/interfaces/credit-card";

import { useCartFooterViewModel } from "@/view-models/cart/components/cart-footer/cart-footer.model";
import { CartFooterView } from "@/view-models/cart/components/cart-footer/cart-footer.view";

export interface CartFooterParams {
  creditCards: CreditCard[];
  isLoadingCreditCards: boolean;
  openCartBottomSheet: () => void;
}

export function CartFooter({
  creditCards,
  isLoadingCreditCards,
  openCartBottomSheet,
}: CartFooterParams) {
  const viewModel = useCartFooterViewModel();

  return (
    <CartFooterView
      creditCards={creditCards}
      isLoadingCreditCards={isLoadingCreditCards}
      openCartBottomSheet={openCartBottomSheet}
      {...viewModel}
    />
  );
}
