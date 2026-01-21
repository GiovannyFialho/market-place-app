import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import {
  AppInputType,
  INPUT_TYPE_CONFIG,
} from "@/shared/components/app-input/input.types";
import {
  appInputVariants,
  appInputVariantsProps,
} from "@/shared/components/app-input/input.variants";
import { useAppInputViewModel } from "@/shared/components/app-input/useAppInputViewModel";

export type AppInputProps = {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
  inputType?: AppInputType;
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
  inputType = "text",
  ...textInputProps
}: AppInputProps) {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  });

  const styles = appInputVariants({ isFocused, isError: !!error, isDisabled });

  const inputTypeProps = INPUT_TYPE_CONFIG[inputType];

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            color={getIconColor()}
            name={leftIcon}
            size={22}
            className="mr-3"
          />
        )}

        <TextInput
          value={value}
          className={styles.input()}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          secureTextEntry={showPassword}
          {...inputTypeProps}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" className="ml-2" /> {error}
        </Text>
      )}
    </View>
  );
}
