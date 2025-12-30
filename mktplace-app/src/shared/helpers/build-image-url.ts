import Constants from "expo-constants";
import { Platform } from "react-native";

export function buildImageURL(originalURL: string) {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalURL;
  }

  return Platform.select({
    android: originalURL.replace("localhost", "10.0.2.2"),
    ios: originalURL,
  });
}
