import { Text, View } from "react-native";

import { useFilterModel } from "./model";

export function FilterView({}: ReturnType<typeof useFilterModel>) {
  return (
    <View className="h-72 mb-11">
      <Text>Hello</Text>
    </View>
  );
}
