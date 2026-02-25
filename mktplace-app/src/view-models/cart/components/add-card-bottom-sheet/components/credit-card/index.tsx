import { useCreditCardViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.model";
import { CreditCardView } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.view";

export function CreditCard() {
  const viewModel = useCreditCardViewModel();

  return <CreditCardView {...viewModel} />;
}
