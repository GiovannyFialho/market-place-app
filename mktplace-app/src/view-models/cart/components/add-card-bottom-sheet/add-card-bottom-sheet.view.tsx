import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/shared/components/app-button";
import { AppInputController } from "@/shared/components/app-input-controller";

import { useAddCardBottomSheetViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";
import { CreditCard } from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card";

import { colors } from "@/styles/colors";

export function AddCardBottomSheetView({
  control,
  cardNumberMask,
  expirationDateMask,
  handleCreateCreditCard,
}: ReturnType<typeof useAddCardBottomSheetViewModel>) {
  return (
    <ScrollView className="flex-1">
      <View className="p-8">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-base font-bold text-gray-500">
            Adicionar cartão
          </Text>

          <TouchableOpacity className="w-8 items-center justify-center border border-gray-400 rounded-[10px]">
            <Ionicons
              name="close-outline"
              size={24}
              color={colors.grays[400]}
            />
          </TouchableOpacity>
        </View>

        <CreditCard />

        <View className="mt-6 gap-4">
          <AppInputController
            control={control}
            name="titularName"
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome completo"
          />

          <AppInputController
            control={control}
            name="number"
            leftIcon="card-outline"
            label="NÚMERO"
            placeholder="Número do cartão"
            keyboardType="numeric"
            mask={cardNumberMask}
            maxLength={19}
          />

          <View className="flex-row gap-4">
            <View className="flex-1">
              <AppInputController
                control={control}
                name="expirationDate"
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                mask={expirationDateMask}
                maxLength={5}
              />
            </View>

            <View className="flex-1">
              <AppInputController
                control={control}
                name="CVV"
                leftIcon="lock-closed-outline"
                label="CVV"
                placeholder="000"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View className="flex-row gap-4 pb-5 mt-8">
          <View className="flex-1">
            <AppButton variant="outlined">Cancelar</AppButton>
          </View>

          <View className="flex-1">
            <AppButton onPress={handleCreateCreditCard}>Salvar</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
