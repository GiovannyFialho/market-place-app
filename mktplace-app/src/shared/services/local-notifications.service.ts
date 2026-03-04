import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import { colors } from "@/styles/colors";

const DEFAULT_CHANNEL = "default";

const NOTIFICATION_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

async function setupNotificationChannel() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
      name: "Notificações do Marketplace",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: colors["purple-base"],
    });
  }
}

interface ScheduleCartReminderInterface {
  productId: number;
  productName: string;
  delayInMinutes: number;
}

async function scheduleCartReminder({
  productId,
  productName,
  delayInMinutes,
}: ScheduleCartReminderInterface) {
  const hasPermission = await Notifications.requestPermissionsAsync();

  if (hasPermission.status !== "granted") return;

  await setupNotificationChannel();

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATION_IDS.CART_REMINDER,
    content: {
      title: "Você esqueceu algo no carrinho!",
      body: `O produto ${productName} está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart_reminder",
        productId: String(productId),
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
    },
  });

  return notification;
}

export const localNotificationsService = {
  scheduleCartReminder,
};
