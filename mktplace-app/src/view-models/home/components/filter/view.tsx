import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "../../../../shared/components/app-button";
import { AppInput } from "../../../../shared/components/app-input";

import { useFilterModel } from "./model";

import { colors } from "../../../../styles/colors";

export function FilterView({
  productCategories,
  isLoading,
  selectedCategories,
  handleValueMaxChange,
  handleValueMinChange,
  handleCategoryToggle,
}: ReturnType<typeof useFilterModel>) {
  return (
    <View>
      <View className="flex-row items-center justify-between py-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>

        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>

      <View className="py-4 px-6">
        <Text className="font-semibold text-base text-gray-300">VALOR</Text>

        <View className="flex-row mb-4 w-full">
          <View className="flex-1">
            <AppInput
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
              onChangeText={(text) => handleValueMinChange(Number(text))}
            />
          </View>

          <View className="flex-1">
            <AppInput
              placeholder="Até"
              keyboardType="numeric"
              containerClassName="w-[90%]"
              onChangeText={(text) => handleValueMaxChange(Number(text))}
            />
          </View>
        </View>

        <Text className="font-semibold text-base text-gray-300">CATEGORIA</Text>

        {isLoading ? (
          <Text>Carregando categorias...</Text>
        ) : (
          <View className="mb-6 gap-3">
            {productCategories?.map(({ name, id }) => (
              <TouchableOpacity
                key={`product-category-${id}`}
                className="flex-row items-center py-2"
                onPress={() => handleCategoryToggle(id)}
              >
                <Checkbox
                  value={selectedCategories.includes(id)}
                  className="mr-3 rounded-full"
                  color={colors["purple-base"]}
                  onValueChange={() => handleCategoryToggle(id)}
                />

                <Text className="text-base text-gray-400">{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <AppButton variant="outlined">Limpar filtro</AppButton>
          </View>

          <View className="flex-1">
            <AppButton>Filtrar</AppButton>
          </View>
        </View>
      </View>
    </View>
  );
}
