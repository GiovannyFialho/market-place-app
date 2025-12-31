import { ActivityIndicator, View } from "react-native";

import { colors } from "../../../../styles/colors";

interface FooterProps {
  isLoading: boolean;
}

export function Footer({ isLoading }: FooterProps) {
  if (!isLoading) return null;

  return (
    <View className="w-full h-20 flex items-center justify-center">
      <ActivityIndicator size="small" color={colors["purple-base"]} />
    </View>
  );
}
