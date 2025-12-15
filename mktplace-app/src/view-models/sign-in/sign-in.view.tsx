import { router } from "expo-router";
import { Text, View } from "react-native";

import { AppButton } from "../../shared/components/app-button";
import { AppInputController } from "../../shared/components/app-input-controller";
import { AuthFormHeader } from "../../shared/components/auth-form-header";
import { KeyboardContainer } from "../../shared/components/keyboard-container";

import { useSignInSchemaViewModel } from "./useSignIn.viewModel";

type SignInViewProps = ReturnType<typeof useSignInSchemaViewModel>;

export function SignInView({ control, onSubmit }: SignInViewProps) {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <AuthFormHeader
            subTitle="Informe seu e-mail e senha"
            title="Acesse sua conta"
          />

          <AppInputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            placeholder="mail@example.com.br"
            name="email"
          />

          <AppInputController
            leftIcon="lock-closed-outline"
            control={control}
            name="password"
            label="SENHA"
            placeholder="Sua senha"
            secureTextEntry
          />

          <AppButton className="mt-6" onPress={onSubmit}>
            Login
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>

          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/(public)/sign-up")}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
}
