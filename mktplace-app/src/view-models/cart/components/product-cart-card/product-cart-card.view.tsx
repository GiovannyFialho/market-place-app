import { Image, Text, TouchableOpacity, View } from "react-native";

import { AppPriceText } from "@/shared/components/app-price-text";
import type { CartProduct } from "@/shared/domain/cart/cart.types";
import { buildImageURL } from "@/shared/helpers/build-image-url";

import { useProductCartCardViewModel } from "@/view-models/cart/components/product-cart-card/product-cart-card.model";

interface ProductCartCardViewParams extends ReturnType<
  typeof useProductCartCardViewModel
> {
  product: CartProduct;
}

export function ProductCartCardView({
  product,
  handleDecrement,
  handleIncrement,
}: ProductCartCardViewParams) {
  return (
    <View className="bg-white h-[71px] flex-row items-center px-2 mb-2 rounded-lg">
      <Image
        source={{ uri: buildImageURL(product?.image ?? "") }}
        className="size-16 rounded-md mr-4"
        resizeMode="cover"
      />

      <View className="flex-1 mr-3 gap-1">
        <Text className="text-sm text-gray-400">{product.name}</Text>

        <AppPriceText
          classNameCurrency="text-sm font-bold"
          classNameValue="text-sm font-bold"
          value={Number(product.price)}
        />
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity
          className="border-[1.2px] size-[18px] border-purple-base rounded-md items-center justify-center"
          onPress={() => handleDecrement(product.id, product.quantity)}
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            -
          </Text>
        </TouchableOpacity>

        <View className="mx-2 items-center justify-center min-w-[24px] border-b border-gray-300">
          <Text className="font-medium text-gray-700">{product.quantity}</Text>
        </View>

        <TouchableOpacity
          className="border-[1.2px] size-[18px] border-purple-base rounded-md items-center justify-center"
          onPress={() => handleIncrement(product.id, product.quantity)}
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
