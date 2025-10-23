import { useRef, useState } from "react";
import { BlurEvent, FocusEvent, type TextInput } from "react-native";

import { colors } from "../../../styles/colors";

type AppInputViewModelProps = {
  value?: string;
  error?: string;
  secureTextEntry?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  mask?: (text: string) => string | void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  onChangeText?: (text: string) => string | void;
};

export function useAppInputViewModel({
  value,
  error,
  secureTextEntry,
  isError,
  isDisabled,
  mask,
  onFocus,
  onBlur,
  onChangeText,
}: AppInputViewModelProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  function handlePasswordToggle() {
    setShowPassword((prevValue) => !prevValue);
  }

  function handleWrapperPress() {
    inputRef.current?.focus();
  }

  function handleFocus(event: FocusEvent) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: BlurEvent) {
    setIsFocused(false);
    onBlur?.(event);
  }

  function getIconColor() {
    if (isFocused) return colors["purple-base"];
    if (isError) return colors.danger;
    if (value) return colors["purple-base"];

    return colors.grays[200];
  }

  return {
    getIconColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
  };
}
