import { View } from "react-native";

import { useCartViewModel } from "@/view-models/cart/cart.model";

export function CartView({}: ReturnType<typeof useCartViewModel>) {
  return <View></View>;
}
