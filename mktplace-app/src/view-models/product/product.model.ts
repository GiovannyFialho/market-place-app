import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite-query";
import { useGetProductDetails } from "@/shared/queries/product/use-get-product-details";
import { useCartStore } from "@/shared/store/cart-store";
import { useModalStore } from "@/shared/store/modal-store";
import { AddToCartSuccessModal } from "@/view-models/product/components/add-to-cart-success-modal";
import { router } from "expo-router";
import { createElement } from "react";

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

  const { addProduct } = useCartStore();

  const { open, close } = useModalStore();

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

  function onGoToCart() {
    router.push("/(private)/(tabs)/cart");

    close();
  }

  function onContinueShopping() {
    router.push("/(private)/(tabs)/home");

    close();
  }

  function handleAddToCart() {
    if (!productDetail) return;

    addProduct({
      id: productDetail.id,
      name: productDetail.name,
      price: productDetail.value,
      image: productDetail.photo,
    });

    open(
      createElement(AddToCartSuccessModal, {
        productName: productDetail.name,
        onGoToCart,
        onContinueShopping,
        onClose: () => close(),
      }),
    );
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
    handleAddToCart,
  };
}
