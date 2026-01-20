import { CartProduct, OmitedProductCard } from "./cart.types";

export function findExistingProduct(
  productsList: CartProduct[],
  productId: number,
) {
  return productsList.some((product) => product.id === productId);
}

export function addProductToCart(
  productsList: CartProduct[],
  newProduct: OmitedProductCard,
) {
  const existingProduct = findExistingProduct(productsList, newProduct.id);

  if (existingProduct) {
    return productsList.map((product) => {
      if (product.id === newProduct.id) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });
  }

  return [...productsList, { ...newProduct, quantity: 1 }];
}

export function calculateTotal(productsList: CartProduct[]) {
  return productsList.reduce((acc, product) => {
    return acc + Number(product.price) * product.quantity;
  }, 0);
}
