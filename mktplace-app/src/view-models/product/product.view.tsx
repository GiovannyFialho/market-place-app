import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "./components/header";

import { useProductModel } from "./userProduct.model";

export function ProductView({
  productDetail,
  error,
}: ReturnType<typeof useProductModel>) {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }

  if (!productDetail) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => <Header productDetails={productDetail} />}
        className="px-6"
      />
    </SafeAreaView>
  );
}
