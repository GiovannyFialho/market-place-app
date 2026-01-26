import { Text, View } from "react-native";

interface AddToCartSuccessModalParams {
  productName: string;
  onGoToCart: () => void;
  onContinueShopping: () => void;
  onClose: () => void;
}

export function AddToCartSuccessModal({
  productName,
  onGoToCart,
  onContinueShopping,
  onClose,
}: AddToCartSuccessModalParams) {
  return (
    <View className="bg-white rounded-xl p-6 w-full max-w-sm">
      <Text>{productName} foi adicionado ao carrinho!</Text>
    </View>
  );
}
