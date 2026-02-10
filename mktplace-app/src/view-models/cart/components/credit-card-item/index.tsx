import { CreditCard } from "@/shared/interfaces/credit-card";

import { useCreditCardItemViewModel } from "@/view-models/cart/components/credit-card-item/credit-card-item.model";
import { CreditCardItemView } from "@/view-models/cart/components/credit-card-item/credit-card-item.view";

interface CreditCardItemParams {
  creditCard: CreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (creditCard: CreditCard) => void;
}

export function CreditCardItem({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: CreditCardItemParams) {
  const viewModel = useCreditCardItemViewModel(creditCard);

  return (
    <CreditCardItemView
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
      {...viewModel}
    />
  );
}
