import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

interface StarsParams {
  rating: number;
}

export function Stars({ rating }: StarsParams) {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity key={`star-${index}`} onPress={() => {}}>
        <Ionicons
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.grays[200]}
          size={32}
        />
      </TouchableOpacity>
    );
  });
}
