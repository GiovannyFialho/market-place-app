import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";

import { useModalStore } from "../store/modal-store";

import { SelectionModal } from "../components/modals/selection-modal";

interface SelectionOptions {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary" | "danger";
}

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = (config: {
    title: string;
    message?: string;
    options: SelectionOptions[];
  }) => {
    open(createElement(SelectionModal));

    return { showSelection };
  };
};
