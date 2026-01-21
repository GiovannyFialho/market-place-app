import { useGetProductCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinite-query";
import { useGetProductDetails } from "../../shared/queries/product/use-get-product-details";

export function useProductModel(prodcutId: number) {
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetProductDetails(prodcutId);

  const {
    comments,
    isLoading: isLoadingComments,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: errorComments,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductCommentsInfiniteQuery(prodcutId);

  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  function handleRefetch() {
    if (!isRefetching) {
      refetch();
    }
  }

  function handleEndReached() {
    handleLoadMore();
  }

  return {
    productDetail,
    isLoading,
    error,
    comments,
    errorComments,
    isLoadingComments,
    isRefetching,
    isFetchingNextPage,
    handleLoadMore,
    handleRefetch,
    handleEndReached,
  };
}
