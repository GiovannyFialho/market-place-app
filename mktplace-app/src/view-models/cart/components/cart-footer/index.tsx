import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AppButton } from "@/shared/components/app-button";
import { AppPriceText } from "@/shared/components/app-price-text";
import { useCartStore } from "@/shared/store/cart-store";

import { CreditCard } from "@/shared/interfaces/credit-card";

import { colors } from "@/styles/colors";

interface CartFooterParams {
  creditCards: CreditCard[];
  isLoadingCreditCards: boolean;
  openCartBottomSheet: () => void;
}

export function CartFooter({
  creditCards,
  isLoadingCreditCards,
  openCartBottomSheet,
}: CartFooterParams) {
  const { total } = useCartStore();

  return (
    <View className="bg-white p-4 rounded-lg mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-[10px] font-semibold text-gray-600 uppercase">
          Valor total
        </Text>

        <AppPriceText
          value={total}
          classNameCurrency="text-base text-gray-900 font-bold"
          classNameValue="text-base text-gray-900 font-bold"
        />
      </View>

      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[10px] font-semibold text-gray-600 uppercase">
            Cartões de crédito
          </Text>

          <TouchableOpacity
            className="flex-row items-center"
            onPress={openCartBottomSheet}
          >
            <Ionicons
              name="card-outline"
              size={20}
              color={colors["purple-base"]}
            />

            <Text className="text-purple-base ml-2 font-bold">
              Adicionar cartão
            </Text>
          </TouchableOpacity>
        </View>

        {isLoadingCreditCards ? (
          <View className="py-4 items-center">
            <ActivityIndicator size="small" color={colors["purple-base"]} />

            <Text className="text-gray-500 text-sm mt-2">
              Carregando cartões
            </Text>
          </View>
        ) : (
          <FlatList
            data={creditCards}
            renderItem={({ item }) => <Text>{item.titularName}</Text>}
            keyExtractor={(item) => `credit-card-id-${item.id}`}
          />
        )}

        <AppButton className="mt-4">Confirmar compra</AppButton>
      </View>
    </View>
  );
}
