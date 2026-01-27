import { useReviewBottomSheetViewModel } from "@/view-models/product/components/review-bottom-sheet/review-bottom-sheet.model";
import { ReviewBottomSheetView } from "@/view-models/product/components/review-bottom-sheet/review-bottom-sheet.view";

interface ReviewBottomSheetParams {
  productId: number;
}

export function ReviewBottomSheet({ productId }: ReviewBottomSheetParams) {
  const viewModel = useReviewBottomSheetViewModel(productId);

  return <ReviewBottomSheetView {...viewModel} />;
}
