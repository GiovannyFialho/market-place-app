import { useLocalSearchParams } from "expo-router";

import { useProductModel } from "@/view-models/product/product.model";
import { ProductView } from "@/view-models/product/product.view";

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const viewModel = useProductModel(Number(id));

  return <ProductView {...viewModel} />;
}
