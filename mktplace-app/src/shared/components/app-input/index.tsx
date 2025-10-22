import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { appInputVariants, type appInputVariantsProps } from "./input.variants";

export type AppInputProps = {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
} & TextInputProps &
  appInputVariantsProps;

export function AppInput({
  label,
  leftIcon = "person",
  rightIcon = "eye-off-outline",
  containerClassName,
  ...textInputProps
}: AppInputProps) {
  const styles = appInputVariants();

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>

      <Pressable className={styles.wrapper()}>
        <Ionicons name={leftIcon} size={22} />

        <TextInput className={styles.input()} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons name={rightIcon} size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
