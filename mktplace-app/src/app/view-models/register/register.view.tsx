import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>;

export default function RegisterView({ onSubmit }: RegisterViewProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base text-2xl mb-3 font-bold">
        Página de registro
      </Text>

      <TouchableOpacity
        className="mt-5 bg-slate-900 w-max py-2 px-3 rounded-lg"
        onPress={onSubmit}
      >
        <Text className="text-lg font-bold text-white">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
