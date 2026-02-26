import { FocusedField } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";
import { useCreditCardViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.model";
import { CreditCardView } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.view";

export interface CardData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface CreditCardParams {
  isFlipped: boolean;
  focusedField: FocusedField | null;
  cardData: CardData;
}

export function CreditCard({
  isFlipped,
  focusedField,
  cardData,
}: CreditCardParams) {
  const viewModel = useCreditCardViewModel(isFlipped);

  return (
    <CreditCardView
      focusedField={focusedField}
      cardData={cardData}
      {...viewModel}
    />
  );
}
