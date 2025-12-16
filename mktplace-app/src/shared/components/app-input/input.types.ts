import { TextInputProps } from "react-native";

export type AppInputType = "text" | "email" | "password" | "number";

export const INPUT_TYPE_CONFIG: Record<AppInputType, TextInputProps> = {
  text: {
    autoCapitalize: "sentences",
  },
  email: {
    keyboardType: "email-address",
    autoCapitalize: "none",
    autoCorrect: false,
    textContentType: "emailAddress",
  },
  password: {
    secureTextEntry: true,
    autoCapitalize: "none",
    autoCorrect: false,
    textContentType: "password",
  },
  number: {
    keyboardType: "numeric",
    autoCorrect: false,
  },
};
