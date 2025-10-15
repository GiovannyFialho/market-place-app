import { useState } from "react";

export function useRegisterViewModel() {
  const [userData, setUserData] = useState({
    name: "Giovanny",
  });

  return { userData, setUserData };
}
