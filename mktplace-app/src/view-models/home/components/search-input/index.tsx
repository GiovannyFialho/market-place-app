import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { AppInput } from "../../../../shared/components/app-input";
import { useBottomSheetStore } from "../../../../shared/store/bottom-sheet-store";
import { Filter } from "../filter";

import { colors } from "../../../../styles/colors";

export function SearchInput() {
  const { open } = useBottomSheetStore();

  return (
    <View className="mb-3 mt-6">
      <Text className="text-2xl font-bold mt-6">Explore Produtos</Text>
      <View className="flex-row">
        <View className="flex-1">
          <AppInput
            placeholder="Pesquisar"
            leftIcon="search"
            returnKeyType="search"
            className="text-lg flex-1"
          />
        </View>

        <TouchableOpacity
          className="ml-5 mt-6 items-center justify-center rounded-lg border size-[48px] border-purple-base"
          onPress={() =>
            open({
              content: <Filter />,
            })
          }
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
