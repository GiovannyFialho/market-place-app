import Constants from "expo-constants";

import { baseURL } from "@/shared/api/market-place";

export function buildImageURL(originalURL: string) {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalURL;
  }

  if (originalURL.startsWith("/")) {
    return `${baseURL}${originalURL}`;
  }

  return originalURL.replace(/^http:\/\/[^/]+:3001/, baseURL);
}
