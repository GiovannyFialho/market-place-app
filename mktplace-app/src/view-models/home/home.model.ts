import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "../../shared/store/use-filter-store";

export function useHomeViewModel() {
  const { appliedFilterState } = useFilterStore();

  const {
    products,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery({ filters: appliedFilterState });

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
    isRefetching,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  };
}
