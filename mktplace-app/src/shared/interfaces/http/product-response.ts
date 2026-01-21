import type { ProductInterface } from "@/shared/interfaces/product";

export interface ProductResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: ProductInterface[];
}
