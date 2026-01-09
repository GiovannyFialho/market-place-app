import { FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useHomeViewModel } from "./home.model";

import { Footer } from "./components/footer";
import { ProductCard } from "./components/product-card";
import { RenderHeader } from "./components/render-header";

import { colors } from "../../styles/colors";

export function Home({
  products,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  isRefetching,
  searchInputText,
  setSearchInputText,
  handleEndReached,
  handleRefresh,
}: ReturnType<typeof useHomeViewModel>) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={products}
        contentContainerClassName="px-[16px] pb-[120px]"
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        onEndReached={handleEndReached}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            onRefresh={handleRefresh}
          />
        }
        ListHeaderComponent={
          <RenderHeader
            searchInputText={searchInputText}
            setSearchInputText={setSearchInputText}
          />
        }
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage || Boolean(isFetchingNextPage || isLoading)}
          />
        }
      />
    </SafeAreaView>
  );
}
