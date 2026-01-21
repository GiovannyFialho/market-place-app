import { CartProduct, OmitedProductCard } from "./cart.types";

export function findExistingProduct(
  productsList: CartProduct[],
  productId: number,
) {
  return productsList.some((product) => product.id === productId);
}

export function calculateTotal(productsList: CartProduct[]) {
  return productsList.reduce((acc, product) => {
    return acc + Number(product.price) * product.quantity;
  }, 0);
}

export function addProductToCart(
  productsList: CartProduct[],
  newProduct: OmitedProductCard,
) {
  const existingProduct = findExistingProduct(productsList, newProduct.id);

  if (existingProduct) {
    const products = productsList.map((product) => {
      if (product.id === newProduct.id) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });

    const total = calculateTotal(products);

    return { products, total };
  }

  const products = [...productsList, { ...newProduct, quantity: 1 }];
  const total = calculateTotal(products);

  return { products, total };
}

export function removeProductFromList(
  productsList: CartProduct[],
  productId: number,
) {
  const products = productsList.filter((product) => product.id !== productId);
  const total = calculateTotal(products);

  return { products, total };
}
