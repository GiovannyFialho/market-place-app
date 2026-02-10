import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";

import {
  SelectionModal,
  type SelectionModalProps,
} from "@/shared/components/modals/selection-modal";
import {
  SuccessModal,
  type SuccessModalProps,
} from "@/shared/components/modals/success-modal";
import { useModalStore } from "@/shared/store/modal-store";

export type SelectionVariant = "primary" | "secondary" | "danger";
export interface SelectionOption {
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: SelectionVariant;
  onPress: () => void;
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
      } as SelectionModalProps),
    );
  };

  const showSuccess = (config: SuccessModalProps) => {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
          if (config.onButtonPress) {
            config.onButtonPress();
          }

          close();
        },
      }),
    );
  };

  return { showSelection, showSuccess };
};
