import SearchComponent from "@/components/pages/system/search/SearchComponent";
import React from "react";

export const metadata = {
  title: `Pesquisa - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
};

const SearchPage = (props: Props) => {
  return <SearchComponent />;
};

export default SearchPage;
