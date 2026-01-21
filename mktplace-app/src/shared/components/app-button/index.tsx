import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import {
  buttonVariants,
  ButtonVariantsProps,
} from "@/shared/components/app-button/button.variants";

import { colors } from "@/styles/colors";

type AppButtonProps = {
  children: ReactNode;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
} & TouchableOpacityProps &
  ButtonVariantsProps;

export function AppButton({
  children,
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  variant = "filled",
  className,
  ...rest
}: AppButtonProps) {
  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
    variant,
  });

  const contentColor =
    variant === "filled" ? colors.white : colors["purple-base"];

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={contentColor} />;
    }

    return (
      <>
        {leftIcon && (
          <Ionicons name={leftIcon} color={contentColor} size={20} />
        )}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <Ionicons name={rightIcon} color={contentColor} size={20} />
        )}
      </>
    );
  };

  return (
    <TouchableOpacity className={styles.base({ className })} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}
