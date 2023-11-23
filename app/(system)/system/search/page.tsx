import SearchComponent from "@/components/pages/system/search/SearchComponent";

export const metadata = {
  title: `Pesquisa - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
};

const SearchPage = () => {
  return <SearchComponent />;
};

export default SearchPage;
