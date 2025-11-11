import { router } from "expo-router";
import { View } from "react-native";

import { AppButton } from "../../shared/components/app-button";
import { AppInputController } from "../../shared/components/app-input-controller";
import { AuthFormHeader } from "../../shared/components/auth-form-header";
import { KeyboardContainer } from "../../shared/components/keyboard-container";

import { useUserStore } from "../../shared/store/user-store";
import { useSignInSchemaViewModel } from "./useSignIn.viewModel";

type SignInViewProps = ReturnType<typeof useSignInSchemaViewModel>;

export function SignInView({ control, onSubmit }: SignInViewProps) {
  const { user } = useUserStore();

  console.log({ user });

  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
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

        <AppButton onPress={onSubmit}>Login</AppButton>

        <AppButton
          variant="outlined"
          rightIcon="arrow-forward"
          onPress={() => router.push("/sign-up")}
        >
          Registro
        </AppButton>
      </View>
    </KeyboardContainer>
  );
}
