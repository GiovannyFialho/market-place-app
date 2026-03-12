import { useLocalSearchParams } from "expo-router";

import { useProductModel } from "@/view-models/product/product.model";
import { ProductView } from "@/view-models/product/product.view";

export default function Product() {
  const { id, openFeedbackBottomSheet } = useLocalSearchParams<{
    id: string;
    openFeedbackBottomSheet?: string;
  }>();

  const viewModel = useProductModel(Number(id), !!openFeedbackBottomSheet);

  return <ProductView {...viewModel} />;
}
