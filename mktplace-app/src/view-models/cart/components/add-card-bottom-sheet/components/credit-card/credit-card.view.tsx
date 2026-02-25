import { View } from "react-native";

import { FocusedField } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";
import { useCreditCardViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.model";

export function CreditCardView({
  focusedField,
}: ReturnType<typeof useCreditCardViewModel> & {
  focusedField: FocusedField | null;
}) {
  console.log({ focusedField });

  return <View className="h-[192px]"></View>;
}
