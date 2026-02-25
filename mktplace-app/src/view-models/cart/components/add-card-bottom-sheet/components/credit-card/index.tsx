import { FocusedField } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";
import { useCreditCardViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.model";
import { CreditCardView } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.view";

interface CreditCardParams {
  isFlipped: boolean;
  focusedField: FocusedField | null;
}

export function CreditCard({ isFlipped, focusedField }: CreditCardParams) {
  const viewModel = useCreditCardViewModel(isFlipped);

  return <CreditCardView focusedField={focusedField} {...viewModel} />;
}
