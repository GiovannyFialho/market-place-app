import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";

import { AppButton } from "@/shared/components/app-button";
import { AppInputController } from "@/shared/components/app-input-controller";
import { KeyboardContainer } from "@/shared/components/keyboard-container";
import { buildImageURL } from "@/shared/helpers/build-image-url";

import { Header } from "@/view-models/profile/components/header";
import { useProfileViewModel } from "@/view-models/profile/profile.model";

export function ProfileView({
  control,
  avatarUri,
  onSubmit,
  isSubmitting,
  handleLogout,
}: ReturnType<typeof useProfileViewModel>) {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <Header onLogout={handleLogout} />

        <TouchableOpacity className="w-[120px] h-[120px] rounded-xl items-center justify-center bg-shape self-center mb-8">
          {avatarUri ? (
            <Image
              source={{ uri: buildImageURL(avatarUri) }}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <Text className="text-base mt-6 font-bold text-gray-500">
          Dados pessoais
        </Text>

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
          label="NOVA SENHA"
          control={control}
          name="password"
          placeholder="Nova senha"
          secureTextEntry
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR NOVA SENHA"
          control={control}
          name="newPassword"
          placeholder="Confirme sua nova senha"
          secureTextEntry
        />

        <AppButton className="mt-6" onPress={onSubmit} isLoading={isSubmitting}>
          Atualizar cadastro
        </AppButton>
      </ScrollView>
    </KeyboardContainer>
  );
}
