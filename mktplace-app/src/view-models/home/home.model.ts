import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinite.query";

export function useHomeViewModel() {
  const {
    products,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    refetch,
  } = useProductInfiniteQuery();

  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }

  async function handleRefresh() {
    await refetch();
  }

  function handleEndReached() {
    handleLoadMore();
  }

  return {
    products,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  };
}
