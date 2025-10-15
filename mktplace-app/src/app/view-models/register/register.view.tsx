import { Text, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>;

export default function RegisterView({ userData }: RegisterViewProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Olá, {userData.name}!</Text>
    </View>
  );
}
