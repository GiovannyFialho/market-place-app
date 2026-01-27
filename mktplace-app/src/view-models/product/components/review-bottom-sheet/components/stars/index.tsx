import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

interface StarsParams {
  rating: number;
  onChangeRating: (rating: number) => void;
}

export function Stars({ rating, onChangeRating }: StarsParams) {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity
        key={`star-${index}`}
        onPress={() => onChangeRating(starNumber)}
      >
        <Ionicons
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.grays[200]}
          size={32}
        />
      </TouchableOpacity>
    );
  });
}
