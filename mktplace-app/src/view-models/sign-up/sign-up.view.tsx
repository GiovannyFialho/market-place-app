import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/shared/components/app-button";
import { AppInputController } from "@/shared/components/app-input-controller";
import { AuthFormHeader } from "@/shared/components/auth-form-header";
import { KeyboardContainer } from "@/shared/components/keyboard-container";

import { useSignUpSchemaViewModel } from "@/view-models/sign-up/sign-up.model";

type SignUpViewProps = ReturnType<typeof useSignUpSchemaViewModel>;

export default function SignUpView({
  control,
  onSubmit,
  handleSelectAvatar,
  avatarUri,
}: SignUpViewProps) {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subTitle="Informe seus dados pessoais e de acesso"
        />

        <TouchableOpacity
          className="w-[120px] h-[120px] rounded-xl items-center justify-center bg-shape self-center mb-8"
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          inputType="number"
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          inputType="email"
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

        <AppButton className="mt-6" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base mb-6 text-gray-300">
            Já tem uma conta?
          </Text>

          <AppButton
            variant="outlined"
            onPress={() => router.push("/(public)/sign-in")}
          >
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
}
