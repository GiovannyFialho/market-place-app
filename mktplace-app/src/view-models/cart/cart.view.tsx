import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCartViewModel } from "@/view-models/cart/cart.model";

import { CartFooter } from "@/view-models/cart/components/cart-footer";
import { CartHeader } from "@/view-models/cart/components/cart-header";
import { EmptyList } from "@/view-models/cart/components/empty-list";
import { ProductCartCard } from "@/view-models/cart/components/product-cart-card";

export function CartView({
  products,
  creditCards,
  isLoadingCreditCards,
  openCartBottomSheet,
}: ReturnType<typeof useCartViewModel>) {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
        contentContainerClassName="px-6"
        ListHeaderComponent={<CartHeader />}
        renderItem={({ item }) => <ProductCartCard product={item} />}
        ListFooterComponent={
          products.length > 0 ? (
            <CartFooter
              creditCards={creditCards}
              isLoadingCreditCards={isLoadingCreditCards}
              openCartBottomSheet={openCartBottomSheet}
            />
          ) : undefined
        }
        ListEmptyComponent={<EmptyList />}
      />
    </SafeAreaView>
  );
}
