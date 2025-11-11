import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { buttonVariants, type ButtonVariantsProps } from "./button.variants";

type AppButtonProps = {
  children: ReactNode;
  leftIcon?: keyof typeof Ionicons.glyphMap;
} & TouchableOpacityProps &
  ButtonVariantsProps;

export function AppButton({ children, leftIcon, ...rest }: AppButtonProps) {
  const styles = buttonVariants();

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
