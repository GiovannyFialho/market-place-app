import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCartViewModel } from "@/view-models/cart/cart.model";

import { ProductCartCard } from "@/view-models/cart/components/product-cart-card";

export function CartView({ products }: ReturnType<typeof useCartViewModel>) {
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
        contentContainerClassName="px-6"
        renderItem={({ item }) => <ProductCartCard product={item} />}
      />
    </SafeAreaView>
  );
}
