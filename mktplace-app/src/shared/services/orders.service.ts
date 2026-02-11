import { marketPlaceAPIClient } from "@/shared/api/market-place";

import type { GetOrdersResponse } from "@/shared/interfaces/http/get-orders";
import type {
  SubmitOrderRequestParamsInterface,
  SubmitOrderResponse,
} from "@/shared/interfaces/http/orders";

export async function submitOrder(order: SubmitOrderRequestParamsInterface) {
  const { data } = await marketPlaceAPIClient.post<SubmitOrderResponse>(
    "/orders",
    order,
  );

  return data;
}

export async function getOrders() {
  const { data } = await marketPlaceAPIClient.get<GetOrdersResponse>("/orders");

  return data;
}
