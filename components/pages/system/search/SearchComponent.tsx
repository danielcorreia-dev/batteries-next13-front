"use client";

import useSWR from "swr";
import SearchPlaceholder from "@/public/images/search/search_placeholder.svg";
import Image from "next/image";
import SearchBar from "@/components/pages/system/search/SearchBar";
import CardContainer from "@/components/ui/CardContainer";
import SystemHeader from "@/components/ui/SystemHeader";
import { FC, useEffect, useState } from "react";
import SearchResults from "@/components/pages/system/search/SearchResults";

const SearchComponent: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [users, setUsers] = useState<any[]>(["Procure alguma empresa/usuário"]);

  const [initialValue] = useState<string[]>(["Procure alguma empresa/usuário"]);

  const fetcher = async (query: string) => {
    const res = await fetch(`/nest-api/company/search?name=${query}`);
    if (!res.ok) {
      throw Error("Erro ao buscar dados");
    }
    const data = await res.json();

    return data.data;
  };

  const { data: queryData, isValidating } = useSWR(
    debouncedValue ?? null,
    fetcher,
  );

  useEffect(() => {
    if (debouncedValue.length > 0) {
      if (Array.isArray(queryData) && queryData.length > 0) {
        setUsers(queryData);
      } else {
        setUsers([]);
      }
    } else {
      setUsers(initialValue);
    }
  }, [debouncedValue, queryData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <>
      <SystemHeader title="Pesquisa" subtitle="Pesquise por empresas" />
      <CardContainer className="mb-8 max-w-5xl">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          isHandling={isValidating}
        />
      </CardContainer>
      {initialValue[0] !== users[0] ? (
        <SearchResults
          items={queryData}
          isHandling={isValidating}
          className={"max-5-xl"}
        />
      ) : (
        <div className="relative mt-16 flex max-w-5xl flex-col items-center justify-center gap-8 opacity-75">
          <Image
            src={SearchPlaceholder}
            alt="Search placholder"
            className="h-2/5 w-2/5 "
          />
          <h2 className="text-sm text-neutral-500 dark:text-neutral-50">
            Digite na barra de pesquisa para encontrar alguma empresa
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
