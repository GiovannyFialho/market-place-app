import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

interface CartStore {
  product: CartProduct[];
  total: number;
  addProduct: (product: Omit<CartProduct, "quantity">) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (params: { productId: number; quantity: number }) => void;
  clearCart: () => void;
  getProductCount: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      product: [],
      total: 0,
      addProduct: () => set({}),
      removeProduct: () => set({}),
      updateQuantity: () => set({}),
      clearCart: () => set({ product: [], total: 0 }),
      getProductCount: () => 0,
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
