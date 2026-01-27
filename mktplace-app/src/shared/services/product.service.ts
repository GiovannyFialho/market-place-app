import { marketPlaceAPIClient } from "@/shared/api/market-place";
import {
  CreateCommentRequest,
  CreateCommentResponse,
} from "@/shared/interfaces/http/create-comment";

import type { PaginatedResponse } from "@/shared/interfaces/http/paginated-response";
import type { ProductRequest } from "@/shared/interfaces/http/product";
import type { GetProductCommentsInterface } from "@/shared/interfaces/http/product-comments";
import type { GetProductDetailsInterface } from "@/shared/interfaces/http/product-detail";
import {
  UpdateCommentRequest,
  UpdateCommentResponse,
} from "@/shared/interfaces/http/update-comment";
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

export const createComment = async (params: CreateCommentRequest) => {
  const { data } = await marketPlaceAPIClient.post<CreateCommentResponse>(
    "/products/create/comments",
    params,
  );

  return data;
};

export const getUserComment = async (productId: number) => {
  const { data } = await marketPlaceAPIClient.get<{
    content: string;
    rating: number;
  }>(`/products/${productId}/user-comment`);

  return data;
};

export const updateUserComment = async (params: UpdateCommentRequest) => {
  const { data } = await marketPlaceAPIClient.put<UpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    {
      content: params.content,
      rating: params.rating,
    },
  );

  return data;
};
