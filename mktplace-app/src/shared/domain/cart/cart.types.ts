export interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

export type OmitedProductCard = Omit<CartProduct, "quantity">;
