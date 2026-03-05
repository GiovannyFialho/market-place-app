import { localNotificationsService } from "@/shared/services/local-notifications.service";
import { useEffect } from "react";

export function useNotifications() {
  useEffect(() => {
    localNotificationsService.requestPermissions();
    localNotificationsService.setupNotificationChannel();
  }, []);

  return {};
}
