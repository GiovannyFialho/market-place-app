import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import { useSignUpSchemaViewModel } from "./useSignUp.viewModel";

import { AppInputController } from "../../shared/components/app-input-controller";
import { AuthFormHeader } from "../../shared/components/auth-form-header";
import { KeyboardContainer } from "../../shared/components/keyboard-container";

type SignUpViewProps = ReturnType<typeof useSignUpSchemaViewModel>;

export default function SignUpView({ control, onSubmit }: SignUpViewProps) {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subTitle="Informe seus dados pessoais e de acesso"
        />

        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          placeholder="mail@example.com.br"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          placeholder="Sua senha"
          secureTextEntry
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          placeholder="Confirme sua senha"
          secureTextEntry
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
      </ScrollView>
    </KeyboardContainer>
  );
}
