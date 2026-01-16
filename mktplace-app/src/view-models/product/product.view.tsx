import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CommentItem } from "./components/comment-item";
import { EmptyList } from "./components/empty-list";
import { Header } from "./components/header";
import { ListFooter } from "./components/list-footer";
import { Loading } from "./components/loading";

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
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }

  if (!productDetail) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={comments}
        className="px-6"
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={() => <Header productDetails={productDetail} />}
        ListFooterComponent={() => (
          <ListFooter isLoadingMore={isFetchingNextPage} />
        )}
        ListEmptyComponent={() => (
          <EmptyList isLoadingComments={isLoadingComments} />
        )}
      />
    </SafeAreaView>
  );
}
