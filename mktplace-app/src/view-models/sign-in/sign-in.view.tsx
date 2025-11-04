import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { AppInput } from "../../shared/components/app-input";
import { AuthFormHeader } from "../../shared/components/auth-form-header";

export function SignInView() {
  return (
    <View className="items-center justify-center flex-1">
      <AuthFormHeader
        subTitle="Informe seu e-mail e senha"
        title="Acesse sua conta"
      />

      <AppInput label="E-mail" leftIcon="mail-outline" />
      <AppInput label="Senha" leftIcon="lock-closed-outline" />

      <TouchableOpacity onPress={() => router.push("/sign-up")}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
