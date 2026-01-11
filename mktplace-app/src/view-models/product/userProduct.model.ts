import { useGetProductDetails } from "../../shared/queries/product/use-get-product-details";

export function useProductModel(prodcutId: number) {
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetProductDetails(prodcutId);

  return { productDetail, isLoading, error };
}
