import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories";

export function useFilterModel() {
  const {
    data: productCategories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  return { productCategories, isLoading, error, refetch };
}
