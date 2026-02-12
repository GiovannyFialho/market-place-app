import { useGetOrdersQuery } from "@/shared/queries/orders/use-get-orders.query";

export function useOrdersViewModel() {
  const { data: ordersResponse } = useGetOrdersQuery();
  const orders = ordersResponse?.orders ?? [];

  return { orders };
}
