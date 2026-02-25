import { View } from "react-native";

import { useCreditCardViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.model";

export function CreditCardView({}: ReturnType<typeof useCreditCardViewModel>) {
  return <View className="h-[192px]"></View>;
}
