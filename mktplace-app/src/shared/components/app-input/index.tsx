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

import { useAppInputViewModel } from "./useAppInputViewModel";

export type AppInputProps = {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
} & TextInputProps &
  appInputVariantsProps;

export function AppInput({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  isDisabled,
  ...textInputProps
}: AppInputProps) {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  });

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
