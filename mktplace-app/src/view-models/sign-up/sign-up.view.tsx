import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { useSignUpSchemaViewModel } from "./useSignUp.viewModel";

import { AppInputController } from "../../shared/components/app-input-controller";
import { AuthFormHeader } from "../../shared/components/auth-form-header";

type SignUpViewProps = ReturnType<typeof useSignUpSchemaViewModel>;

export default function SignUpView({ control, onSubmit }: SignUpViewProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subTitle="Informe seus dados pessoais e de acesso"
      />

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

      <TouchableOpacity
        className="mt-5"
        onPress={() => router.push("/sign-in")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
