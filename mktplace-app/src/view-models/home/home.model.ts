import { useState } from "react";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "@/shared/store/use-filter-store";

export function useHomeViewModel() {
  const [searchInputText, setSearchInputText] = useState("");

  const { appliedFilterState } = useFilterStore();
  const currentSearchText = useDebounce(searchInputText);

  const {
    products,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery({
    filters: { ...appliedFilterState, searchText: currentSearchText },
  });

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
    searchInputText,
    setSearchInputText,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  };
}
