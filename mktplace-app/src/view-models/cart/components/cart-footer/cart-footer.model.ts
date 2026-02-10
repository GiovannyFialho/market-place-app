import { useState } from "react";

import { useAppModal } from "@/shared/hooks/useAppModal";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useSubmitOrderMutation } from "@/shared/queries/orders/use-submit-order.mutation";
import { useCartStore } from "@/shared/store/cart-store";
import { router } from "expo-router";

export function useCartFooterViewModel() {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null);

  const { products, total, clearCart } = useCartStore();

  const { showSuccess } = useAppModal();

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

    showSuccess({
      title: "Sucesso!",
      message: "Pedido realizado com sucesso!",
      buttonText: "Ver pedidos",
      onButtonPress: () => router.push("/orders"),
    });
  }

  return {
    selectedCreditCard,
    total,
    submitOrderMutation,
    isLoadingOrder: createOrderMutation.isPending,
    setSelectedCreditCard,
  };
}
