import { useAddCardBottomSheetViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";
import { AddCardBottomSheetView } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.view";

export function AddCardBottomSheet() {
  const viewModel = useAddCardBottomSheetViewModel();

  return <AddCardBottomSheetView {...viewModel} />;
}
