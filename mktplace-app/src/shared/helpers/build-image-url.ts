import Constants from "expo-constants";

import { baseURL } from "../api/market-place";

export function buildImageURL(originalURL: string) {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalURL;
  }

  const updatedURL = originalURL.replace(/^http:\/\/localhost:3001/, baseURL);

  return updatedURL;
}
