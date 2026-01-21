import { Text, TouchableOpacity, View } from "react-native";

import { useUserStore } from "@/shared/store/user-store";

export default function Cart() {
  const { logout } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Carrinho</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
