import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyList } from "@/view-models/orders/components/empty-list";
import { ListHeader } from "@/view-models/orders/components/list-header";
import { OrderItem } from "@/view-models/orders/components/order-item";

import { useOrdersViewModel } from "@/view-models/orders/orders.model";

export function OrdersView({ orders }: ReturnType<typeof useOrdersViewModel>) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={orders}
        keyExtractor={({ id }) => `order-${id}`}
        ListHeaderComponent={ListHeader}
        renderItem={({ item: order }) => <OrderItem order={order} />}
        ListEmptyComponent={EmptyList}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
}
