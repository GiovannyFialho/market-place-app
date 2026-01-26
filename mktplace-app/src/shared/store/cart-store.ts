import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  CartProduct,
  OmitedProductCard,
} from "@/shared/domain/cart/cart.types";
import {
  addProductToCart,
  getProductCount,
  removeProductFromList,
  updateProductQuantity,
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
    (set, get) => ({
      products: [],
      total: 0,
      addProduct: (product) =>
        set((state) => addProductToCart(state.products, product)),
      removeProduct: (productId) =>
        set((state) => removeProductFromList(state.products, productId)),
      updateQuantity: ({ productId, quantity }) =>
        set((state) =>
          updateProductQuantity({
            productId,
            productList: state.products,
            quantity,
          }),
        ),
      clearCart: () => set({ products: [], total: 0 }),
      getProductCount: () => getProductCount(get().products),
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
