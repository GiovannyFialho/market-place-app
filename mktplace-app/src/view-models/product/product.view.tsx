import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProductModel } from "./userProduct.model";

export function ProductView({
  productDetail,
  isLoading,
  error,
}: ReturnType<typeof useProductModel>) {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => (
          <>
            <Text>Product: {productDetail?.name}!</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}
