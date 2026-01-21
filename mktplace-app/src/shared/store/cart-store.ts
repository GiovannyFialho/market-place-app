import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  CartProduct,
  OmitedProductCard,
} from "@/shared/domain/cart/cart.types";
import {
  addProductToCart,
  removeProductFromList,
} from "@/shared/domain/cart/cart.utils";

interface CartStore {
  products: CartProduct[];
  total: number;
  addProduct: (product: OmitedProductCard) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (params: { productId: number; quantity: number }) => void;
  clearCart: () => void;
  getProductCount: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],
      total: 0,
      addProduct: (product) =>
        set((state) => addProductToCart(state.products, product)),
      removeProduct: (productId) =>
        set((state) => removeProductFromList(state.products, productId)),
      updateQuantity: () => set({}),
      clearCart: () => set({ products: [], total: 0 }),
      getProductCount: () => 0,
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
