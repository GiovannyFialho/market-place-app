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

export async function getProducts(params: ProductRequest) {
  const { data } = await marketPlaceAPIClient.post<
    PaginatedResponse<ProductInterface>
  >("/products", params);

  return data;
}

export async function getProductsCategories() {
  const { data } = await marketPlaceAPIClient.get<ProductCategory[]>(
    "/products/categories",
  );

  return data;
}

export async function getProductDetails(id: number) {
  const { data } = await marketPlaceAPIClient.get<GetProductDetailsInterface>(
    `/products/${id}`,
  );

  return data;
}

export async function getProductComments(params: GetProductCommentsInterface) {
  const { data } = await marketPlaceAPIClient.post<
    PaginatedResponse<ProductComment>
  >("/products/comments", params);
  return data;
}

export async function createComment(params: CreateCommentRequest) {
  const { data } = await marketPlaceAPIClient.post<CreateCommentResponse>(
    "/products/create/comments",
    params,
  );

  return data;
}

export async function getUserComment(productId: number) {
  const { data } = await marketPlaceAPIClient.get<{
    comment: {
      id: number;
      content: string;
      createdAt: Date;
      user: {
        id: number;
        name: string;
      };
    };
    rating: number;
  }>(`/products/${productId}/user-comment`);

  return data;
}

export async function updateUserComment(params: UpdateCommentRequest) {
  const { data } = await marketPlaceAPIClient.put<UpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    {
      content: params.content,
      rating: params.rating,
    },
  );

  return data;
}
