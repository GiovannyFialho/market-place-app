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

  function handleEndReached() {
    handleLoadMore();
  }

  async function handleRefresh() {
    await refetch();
  }

  return { products, handleLoadMore, handleRefresh, handleEndReached };
}
