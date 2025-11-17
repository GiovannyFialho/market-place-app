import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import type { SelectionOptions } from "../../../hooks/useAppModal";

export interface SelectionModalProps {
  title: string;
  message?: string;
  options: SelectionOptions[];
}

export const SelectionModal = ({
  title,
  message,
  options,
}: SelectionModalProps) => {
  return (
    <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6">
      <Text>{title}</Text>
      {message && <Text>{message}</Text>}

      <View>
        {options.map((option) => (
          <TouchableOpacity
            className="w-full py-3 px-4 rounded-lg items-center flex-row justify-center mb-2"
            key={option.text}
            onPress={option.onPress}
          >
            {option.icon && <Ionicons name={option.icon} size={24} />}
            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
