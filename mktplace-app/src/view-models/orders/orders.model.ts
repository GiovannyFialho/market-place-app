import { useGetOrdersQuery } from "@/shared/queries/orders/use-get-orders.query";

export function useOrdersViewModel() {
  const { data: ordersResponse, isLoading, error } = useGetOrdersQuery();
  const orders = ordersResponse?.orders ?? [];

  return { orders, isLoading, error };
}
