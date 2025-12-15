import { Redirect, Stack } from "expo-router";
import { useUserStore } from "../../shared/store/user-store";

export default function PrivateLayout() {
  const { user, token } = useUserStore();

  if (!user || !token) {
    return <Redirect href="/(public)/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
