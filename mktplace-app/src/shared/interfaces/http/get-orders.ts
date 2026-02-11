import { OrderInterface } from "@/shared/interfaces/order";

export interface GetOrdersResponse {
  orders: OrderInterface[];
  totalOrders: number;
}
