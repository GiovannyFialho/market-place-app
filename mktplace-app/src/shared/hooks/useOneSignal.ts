import Constants from "expo-constants";
import { useEffect, useState } from "react";

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID;

export function useOneSignal() {
  const [playerId, setPlayerId] = useState<string | undefined>();

  useEffect(() => {
    async function init() {
      if (!ONESIGNAL_APP_ID) return;

      const isExpoGo = Constants.executionEnvironment === "storeClient";

      if (isExpoGo) {
        console.log("OneSignal não disponível no Expo Go");

        return;
      }

      try {
        const { OneSignal } = require("react-native-onesignal");

        OneSignal.initialize(ONESIGNAL_APP_ID);

        const id = await OneSignal.User.pushSubscription.getIdAsync();

        if (id) {
          setPlayerId(id);
        }
      } catch (err) {
        console.log("Erro ao carregar OneSignal:", err);
      }
    }

    init();
  }, []);

  return { playerId };
}
