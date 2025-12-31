import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useHomeViewModel } from "./home.model";

import { HomeHeader } from "./components/home-header";
import { ProductCard } from "./components/product-card";
import { SearchInput } from "./components/search-input";

export function Home({
  products,
  handleEndReached,
}: ReturnType<typeof useHomeViewModel>) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        onEndReached={handleEndReached}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <>
            <HomeHeader />
            <SearchInput />
          </>
        }
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
}
