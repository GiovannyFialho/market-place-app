import { useLocalSearchParams } from "expo-router";

import { ProductView } from "../../../view-models/product/product.view";
import { useProductModel } from "../../../view-models/product/userProduct.model";

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const viewModel = useProductModel(Number(id));

  return <ProductView {...viewModel} />;
}
