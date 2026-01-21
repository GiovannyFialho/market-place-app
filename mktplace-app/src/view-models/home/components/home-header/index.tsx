import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { buildImageURL } from "@/shared/helpers/build-image-url";
import { useUserStore } from "@/shared/store/user-store";

import { colors } from "@/styles/colors";

export function HomeHeader() {
  const { user } = useUserStore();

  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-6">
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: buildImageURL(user?.avatarUrl) }}
              className="w-[56px] h-[56px] rounded-[12px] border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] rounded-[12px] items-center justify-center border-gray-200 bg-shape">
              <Ionicons name="person" size={24} color={colors.grays[300]} />
            </View>
          )}
        </View>

        <View>
          <Text className="font-bold text-base">
            Olá, {user?.name.split(" ")[0] || "Usuário"}
          </Text>

          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold text-sm">
              Ver perfil
            </Text>

            <Ionicons
              name="arrow-forward-outline"
              size={20}
              color={colors["purple-base"]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
