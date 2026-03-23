import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { useFavoriteButtonViewModel } from "@/view-models/product/components/header/components/favorite-button/favorite-button.model";

import { colors } from "@/styles/colors";

export function FavoriteButtonView({
  isFavorite,
  loading,
  handleToggleFavorite,
}: ReturnType<typeof useFavoriteButtonViewModel>) {
  if (loading) {
    return <ActivityIndicator size={29} color={colors["purple-base"]} />;
  }

  return (
    <TouchableOpacity onPress={handleToggleFavorite}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={28}
        color={colors["danger"]}
      />
    </TouchableOpacity>
  );
}
