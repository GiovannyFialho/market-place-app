import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base text-2xl mb-3 font-bold">
        Página de Login
      </Text>

      <TouchableOpacity
        className="mt-5 bg-slate-900 w-max py-2 px-3 rounded-lg"
        onPress={() => router.push("/register")}
      >
        <Text className="text-lg font-bold text-white">Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
