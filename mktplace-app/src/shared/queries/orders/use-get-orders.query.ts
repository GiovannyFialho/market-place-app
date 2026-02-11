import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/shared/services/orders.service";

export function useGetOrdersQuery() {
  const query = useQuery({
    queryFn: getOrders,
    queryKey: ["user-orders"],
    staleTime: 1000 * 60 * 10, // 10 min
  });

  return query;
}
