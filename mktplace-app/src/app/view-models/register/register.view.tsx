import { Text, TouchableOpacity, View } from "react-native";

import { useUserStore } from "../../../shared/store/user-store";

import { useRegisterViewModel } from "./useRegister.viewModel";

import { AppInputController } from "../../../shared/components/app-input-controller";

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>;

export default function RegisterView({ control, onSubmit }: RegisterViewProps) {
  const { user } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base text-2xl mb-3 font-bold">
        Página de registro
      </Text>

      {user?.name && <Text className="text-base font-medium">{user.name}</Text>}

      <AppInputController
        control={control}
        name="email"
        label="E-MAIL"
        leftIcon="mail-outline"
      />

      <TouchableOpacity
        className="mt-5 bg-slate-900 w-max py-2 px-3 rounded-lg"
        onPress={onSubmit}
      >
        <Text className="text-lg font-bold text-white">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
