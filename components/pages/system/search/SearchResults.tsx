import { FC } from "react";
import SearchItem from "./SearchItem";
import EmptySearch from "./EmptySearch";

type Props = {
  items: any[];
  isHandling?: boolean;
  className?: string;
};

const SearchResults: FC<Props> = ({ items, isHandling = false, className }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ${className}`}
    >
      {!isHandling ? (
        items && items.length > 0 ? (
          items?.map((item) => <SearchItem key={item.id} item={item} />)
        ) : (
          <div className={`md:col-span-3 ${className}`}>
            <EmptySearch />
          </div>
        )
      ) : (
        <div
          className={`col-span-1 text-center sm:col-span-2 md:col-span-3 ${className}`}
        >
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
            role="status"
            aria-label="loading"
          ></div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
