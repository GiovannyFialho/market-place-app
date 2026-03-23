import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useFavoriteButtonViewModel } from "@/view-models/product/components/header/components/favorite-button/favorite-button.model";

import { colors } from "@/styles/colors";

export function FavoriteButtonView({
  isFavorite,
}: ReturnType<typeof useFavoriteButtonViewModel>) {
  return (
    <TouchableOpacity>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={28}
        color={colors["danger"]}
      />
    </TouchableOpacity>
  );
}
