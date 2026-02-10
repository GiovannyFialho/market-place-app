import { useState } from "react";

import { CreditCard } from "@/shared/interfaces/credit-card";
import { useSubmitOrderMutation } from "@/shared/queries/orders/use-submit-order.mutation";
import { useCartStore } from "@/shared/store/cart-store";
import { router } from "expo-router";

export function useCartFooterViewModel() {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null);

  const { products, total, clearCart } = useCartStore();

  const createOrderMutation = useSubmitOrderMutation();

  async function submitOrderMutation() {
    if (!selectedCreditCard) return;

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    });

    clearCart();

    router.push("/orders");
  }

  return {
    selectedCreditCard,
    total,
    submitOrderMutation,
    isLoadingOrder: createOrderMutation.isPending,
    setSelectedCreditCard,
  };
}
