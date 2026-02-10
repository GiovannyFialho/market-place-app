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

import { CartFooterParams } from "@/view-models/cart/components/cart-footer";
import { useCartFooterViewModel } from "@/view-models/cart/components/cart-footer/cart-footer.model";
import { CreditCardItem } from "@/view-models/cart/components/credit-card-item";

import { colors } from "@/styles/colors";

type CartFooterViewProps = ReturnType<typeof useCartFooterViewModel> &
  CartFooterParams;

export function CartFooterView({
  creditCards,
  isLoadingCreditCards,
  selectedCreditCard,
  total,
  submitOrderMutation,
  isLoadingOrder,
  setSelectedCreditCard,
  openCartBottomSheet,
}: CartFooterViewProps) {
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
            keyExtractor={(item) => `credit-card-id-${item.id}`}
            renderItem={({ item: creditCard }) => (
              <CreditCardItem
                creditCard={creditCard}
                isSelected={creditCard.id === selectedCreditCard?.id}
                setSelectedCreditCard={setSelectedCreditCard}
              />
            )}
            className="gap-2"
          />
        )}

        <AppButton
          className="mt-4"
          isLoading={isLoadingOrder}
          isDisabled={!selectedCreditCard?.id}
          onPress={submitOrderMutation}
        >
          Confirmar compra
        </AppButton>
      </View>
    </View>
  );
}
