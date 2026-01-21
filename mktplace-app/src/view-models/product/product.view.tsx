import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AddToCardFooter } from "@/view-models/product/components/add-to-card-footer";
import { CommentItem } from "@/view-models/product/components/comment-item";
import { EmptyList } from "@/view-models/product/components/empty-list";
import { Error } from "@/view-models/product/components/error";
import { Header } from "@/view-models/product/components/header";
import { ListFooter } from "@/view-models/product/components/list-footer";
import { Loading } from "@/view-models/product/components/loading";

import { useProductModel } from "@/view-models/product/product.model";

export function ProductView({
  productDetail,
  error,
  comments,
  errorComments,
  isLoadingComments,
  isLoading,
  isRefetching,
  isFetchingNextPage,
  handleLoadMore,
  handleRefetch,
  handleEndReached,
}: ReturnType<typeof useProductModel>) {
  if (error) {
    return <Error />;
  }

  if (isLoading || !productDetail) {
    return <Loading />;
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        data={comments}
        className="px-6"
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        contentContainerClassName="pb-6"
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={() => <Header productDetails={productDetail} />}
        ListFooterComponent={() => (
          <ListFooter isLoadingMore={isFetchingNextPage} />
        )}
        ListEmptyComponent={() => (
          <EmptyList isLoadingComments={isLoadingComments} />
        )}
      />

      <AddToCardFooter product={productDetail} />
    </SafeAreaView>
  );
}
