import { marketPlaceAPIClient } from "../api/market-place";

import type { ProductRequest } from "../interfaces/http/product";
import type { GetProductDetailsInterface } from "../interfaces/http/product-detail";
import type { ProductResponse } from "../interfaces/http/product-response";
import type { ProductCategory } from "../interfaces/product";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceAPIClient.post<ProductResponse>(
    "/products",
    params
  );

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketPlaceAPIClient.get<ProductCategory[]>(
    "/products/categories"
  );

  return data;
};

export const getProductDetails = async (id: number) => {
  const { data } = await marketPlaceAPIClient.get<GetProductDetailsInterface>(
    `/products/${id}`
  );

  return data;
};
