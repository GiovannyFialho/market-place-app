import { marketPlaceAPIClient } from "../api/market-place";
import { ProductRequest } from "../interfaces/http/product";

import type { ProductResponse } from "../interfaces/http/product-response";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceAPIClient.get<ProductResponse>(
    "/products",
    { params }
  );
  return data;
};
