import { Text, View } from "react-native";

import { ProductInterface } from "../../../../shared/interfaces/product";

interface ProductCardProps {
  product: ProductInterface;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
