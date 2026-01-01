import Constants from "expo-constants";

import { baseURL } from "../api/market-place";

export function buildImageURL(originalURL: string) {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalURL;
  }

  return originalURL.replace(/^http:\/\/[^/]+:3001/, baseURL);
}
