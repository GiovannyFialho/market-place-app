import { Image, Text, View } from "react-native";

type AuthFormHeader = {
  title: string;
  subTitle: string;
};

export function AuthFormHeader({ title, subTitle }: AuthFormHeader) {
  return (
    <View className="items-center mb-8">
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="contain"
        className="w-[80px] h-[60px] mb-8"
      />

      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>

      <Text className="text-base text-gray-300 text-center">{subTitle}</Text>
    </View>
  );
}
