import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOrdersViewModel } from "@/view-models/orders/orders.model";

export function OrdersView({ orders }: ReturnType<typeof useOrdersViewModel>) {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={orders}
        keyExtractor={({ id }) => `order-${id}`}
        renderItem={({ item: order }) => <Text>{order.productName}</Text>}
      />
    </SafeAreaView>
  );
}
