import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Product: {id}</Text>
    </View>
  );
}
