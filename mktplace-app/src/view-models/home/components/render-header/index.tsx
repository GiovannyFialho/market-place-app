import { memo } from "react";

import { HomeHeader } from "@/view-models/home/components/home-header";
import { SearchInput } from "@/view-models/home/components/search-input";

export const RenderHeader = memo(
  ({
    searchInputText,
    setSearchInputText,
  }: {
    searchInputText: string;
    setSearchInputText: (text: string) => void;
  }) => (
    <>
      <HomeHeader />
      <SearchInput
        inputValue={searchInputText}
        setSearchInputText={setSearchInputText}
      />
    </>
  ),
);
