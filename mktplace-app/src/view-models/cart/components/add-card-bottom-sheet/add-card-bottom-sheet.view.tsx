import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/shared/components/app-button";
import { AppInput } from "@/shared/components/app-input";

import { useAddCardBottomSheetViewModel } from "@/view-models/cart/components/add-card-bottom-sheet/add-card-bottom-sheet.model";

import { colors } from "@/styles/colors";

export function AddCardBottomSheetView({}: ReturnType<
  typeof useAddCardBottomSheetViewModel
>) {
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

        <View className="mt-6 gap-4">
          <AppInput
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome completo"
          />

          <View className="flex-row gap-4">
            <View className="flex-1">
              <AppInput
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
              />
            </View>

            <View className="flex-1">
              <AppInput
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
            <AppButton>Salvar</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
