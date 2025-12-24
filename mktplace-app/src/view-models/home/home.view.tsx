import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeHeader } from "./components/home-header";

export function Home() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<HomeHeader />}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
}
