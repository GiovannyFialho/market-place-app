import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CommentItem } from "./components/comment-item";
import { EmptyList } from "./components/empty-list";
import { Error } from "./components/error";
import { Header } from "./components/header";
import { ListFooter } from "./components/list-footer";
import { Loading } from "./components/loading";

import { AddToCardFooter } from "./components/add-to-card-footer";
import { useProductModel } from "./userProduct.model";

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
