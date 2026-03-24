import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import { colors } from "@/styles/colors";

const DEFAULT_CHANNEL = "default";

const BASE_DEEP_LINK = "marketplace://";

const NOTIFICATION_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

interface ScheduleProductInterface {
  productId: number;
  productName: string;
  delayInMinutes: number;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

async function requestPermissions(): Promise<boolean> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  return finalStatus === "granted";
}

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

async function scheduleCartReminder({
  productId,
  productName,
  delayInMinutes,
}: ScheduleProductInterface) {
  const hasPermission = await requestPermissions();

  if (!hasPermission) {
    console.log("[LocalNotifications] - Permission not granted");

    return;
  }

  await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATION_IDS.CART_REMINDER}-${productId}`,
    content: {
      title: "🛒 Você esqueceu algo no carrinho!",
      body: `O produto ${productName} está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart_reminder",
        productId: String(productId),
        deepLink: `${BASE_DEEP_LINK}cart`,
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  });
}

async function scheduleFeedbackNotification({
  productId,
  productName,
  delayInMinutes,
}: ScheduleProductInterface) {
  const hasPermission = await requestPermissions();

  if (!hasPermission) {
    console.log("[LocalNotifications] - Permission not granted");

    return;
  }

  await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATION_IDS.PURCHASE_FEEDBACK}-${productId}`,
    content: {
      title: "⭐️ Como foi a sua compra?",
      body: `Você realizou o pedido do produto "${productName}". Envie um feedback do que achou do produto!`,
      data: {
        type: "purchase_feedback",
        productId: String(productId),
        deepLink: `${BASE_DEEP_LINK}product/${productId}?openFeedbackBottomSheet=true`,
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  });
}

async function cancelNotifications(notificationId: string) {
  try {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  } catch (error) {
    console.error("[LocalNotifications] - Erro", JSON.stringify(error));
  }
}

export const localNotificationsService = {
  NOTIFICATION_IDS,
  requestPermissions,
  setupNotificationChannel,
  scheduleCartReminder,
  scheduleFeedbackNotification,
  cancelNotifications,
};
