import { marketPlaceAPIClient } from "@/shared/api/market-place";
import {
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
