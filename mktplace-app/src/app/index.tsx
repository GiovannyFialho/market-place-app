import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "iej21i2j2dd",
  };

  if (!userData) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="/login" />;
}
