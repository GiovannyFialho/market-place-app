import { createElement } from "react";

import { useGetCreditCardsQuery } from "@/shared/queries/credit-cards/use-get-credit-cards.query";
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store";
import { useCartStore } from "@/shared/store/cart-store";

import { AddCardBottomSheet } from "@/view-models/cart/components/add-card-bottom-sheet";

export function useCartViewModel() {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();

  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCardsQuery();

  function openCartBottomSheet() {
    openBottomSheet({ content: createElement(AddCardBottomSheet) });
  }

  return { products, creditCards, isLoadingCreditCards, openCartBottomSheet };
}
