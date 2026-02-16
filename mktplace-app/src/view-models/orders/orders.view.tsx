import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyList } from "@/view-models/orders/components/empty-list";
import { ListHeader } from "@/view-models/orders/components/list-header";
import { OrderItem } from "@/view-models/orders/components/order-item";
import { OrdersError } from "@/view-models/orders/components/orders-error";
import { OrdersLoading } from "@/view-models/orders/components/orders-loading";

import { useOrdersViewModel } from "@/view-models/orders/orders.model";

export function OrdersView({
  orders,
  isLoading,
  error,
}: ReturnType<typeof useOrdersViewModel>) {
  if (isLoading) {
    return <OrdersLoading />;
  }

  if (error) {
    return <OrdersError />;
  }

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
