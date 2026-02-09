import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { useCreditCardItemViewModel } from "@/view-models/cart/components/credit-card-item/credit-card-item.model";

import { colors } from "@/styles/colors";

export function CreditCardItemView({
  formattedCardNumber,
  formattedExpirationDate,
}: ReturnType<typeof useCreditCardItemViewModel>) {
  return (
    <TouchableOpacity className="p-4 rounded-lg border bg-white border-gray-100">
      <View className="flex-row justify-center">
        <View className="mr-4">
          <Ionicons
            name="card-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base">Cartão final {formattedCardNumber}</Text>

          <Text className="text-sm text-gray-500 mt-1">
            {formattedExpirationDate}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="pencil" size={18} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
