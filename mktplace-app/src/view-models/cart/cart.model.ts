import { createElement } from "react";

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store";
import { useCartStore } from "@/shared/store/cart-store";

import { AddCardBottomSheet } from "@/view-models/cart/components/add-card-bottom-sheet";

export function useCartViewModel() {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();

  function openCartBottomSheet() {
    openBottomSheet({ content: createElement(AddCardBottomSheet) });
  }

  return { products, openCartBottomSheet };
}
