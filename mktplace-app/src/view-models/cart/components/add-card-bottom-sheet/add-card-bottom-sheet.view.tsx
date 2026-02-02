import { Text, View } from "react-native";

import { useAddCardBottomSheetViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";

export function AddCardBottomSheetView({}: ReturnType<
  typeof useAddCardBottomSheetViewModel
>) {
  return (
    <View>
      <Text>Adicionar cartão</Text>
    </View>
  );
}
