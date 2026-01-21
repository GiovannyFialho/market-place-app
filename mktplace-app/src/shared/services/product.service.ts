import { marketPlaceAPIClient } from "@/shared/api/market-place";

import type { PaginatedResponse } from "@/shared/interfaces/http/paginated-response";
import type { ProductRequest } from "@/shared/interfaces/http/product";
import type { GetProductCommentsInterface } from "@/shared/interfaces/http/product-comments";
import type { GetProductDetailsInterface } from "@/shared/interfaces/http/product-detail";
import type {
  ProductCategory,
  ProductInterface,
} from "@/shared/interfaces/product";
import type { ProductComment } from "@/shared/interfaces/product-comment";

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceAPIClient.post<
    PaginatedResponse<ProductInterface>
  >("/products", params);

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketPlaceAPIClient.get<ProductCategory[]>(
    "/products/categories",
  );

  return data;
};

export const getProductDetails = async (id: number) => {
  const { data } = await marketPlaceAPIClient.get<GetProductDetailsInterface>(
    `/products/${id}`,
  );

  return data;
};

export const getProductComments = async (
  params: GetProductCommentsInterface,
) => {
  const { data } = await marketPlaceAPIClient.post<
    PaginatedResponse<ProductComment>
  >("/products/comments", params);
  return data;
};
