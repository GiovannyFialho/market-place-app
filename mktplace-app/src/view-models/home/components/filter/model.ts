import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories";
import { useFilterStore } from "../../../../shared/store/use-filter-store";

export function useFilterModel() {
  const {
    data: productCategories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  const { updateFilter, filterState } = useFilterStore();

  function handleValueMaxChange(value: number) {
    updateFilter({ key: "valueMax", value });
  }

  function handleValueMinChange(value: number) {
    updateFilter({ key: "valueMin", value });
  }

  function handleCategoryToggle(categoryId: number) {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlreadyInArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  }

  return {
    productCategories,
    isLoading,
    selectedCategories: filterState.selectedCategories,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
  };
}
