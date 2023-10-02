"use client";
import { FC, useState } from "react";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  isHandling?: boolean;
}

const SearchBar: FC<Props> = ({ inputValue, setInputValue, isHandling }) => {
  return (
    <div>
      <div className="relative flex rounded-md shadow-sm">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="hs-search-box-with-loading-5"
          name="hs-search-box-with-loading-5"
          className="block w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-700 dark:bg-slate-900 dark:text-neutral-300"
          placeholder="Pesquise a empresa desejada"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        {isHandling && (
          <button
            type="button"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-r-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          >
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
