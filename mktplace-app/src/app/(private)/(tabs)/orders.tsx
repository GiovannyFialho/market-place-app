import { useOrdersViewModel } from "@/view-models/orders/orders.model";
import { OrdersView } from "@/view-models/orders/orders.view";

export default function Orders() {
  const viewModel = useOrdersViewModel();

  return <OrdersView {...viewModel} />;
}
