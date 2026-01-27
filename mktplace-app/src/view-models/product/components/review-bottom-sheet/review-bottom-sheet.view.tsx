import { Text, View } from "react-native";

import { useReviewBottomSheetViewModel } from "@/view-models/product/components/review-bottom-sheet/review-bottom-sheet.model";

export function ReviewBottomSheetView({}: ReturnType<
  typeof useReviewBottomSheetViewModel
>) {
  return (
    <View>
      <Text>Review do produto</Text>
    </View>
  );
}
