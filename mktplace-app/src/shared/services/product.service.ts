import { marketPlaceAPIClient } from "../api/market-place";

import type { ProductResponse } from "../interfaces/http/product-response";

interface ProductRequest {
  pagination: {
    page: number;
    perPage: number;
  };
  filters: {
    from: Date;
    to: Date;
    categoryIds: number[];
    searchText: string;
    minValue: number;
    maxValue: number;
  };
  sort: {
    averageRating: string;
  };
}

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceAPIClient.get<ProductResponse>(
    "/products",
    { params }
  );
  return data;
};
