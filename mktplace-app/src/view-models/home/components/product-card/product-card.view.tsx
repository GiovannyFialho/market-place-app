import { Text, View } from "react-native";

import { useProductCardViewModel } from "./useProductCard.model";

export function ProductCardView({
  product,
}: ReturnType<typeof useProductCardViewModel>) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
