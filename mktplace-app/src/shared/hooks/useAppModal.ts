import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";

import { useModalStore } from "../store/modal-store";

import {
  SelectionModal,
  type SelectionModalProps,
} from "../components/modals/selection-modal";

export interface SelectionOption {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary" | "danger";
}

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps)
    );
  };
  return { showSelection };
};
