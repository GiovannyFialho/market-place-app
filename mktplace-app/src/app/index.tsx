import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text className="text-purple-base text-lg font-bold">Hello World</Text>

      <TouchableOpacity onPress={() => router.push("login")}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
}
