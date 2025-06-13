"use client"

import { getSearch } from "@/utils/getSearch";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
// import { SearchResult } from "./searchResult";

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovie = async () => {
        const search = await getSearch(searchValue);
        setMovies(search)
        
    }
    searchMovie()
  }, [searchValue]);

  return (
    <div className="relative flex items-center border-1 rounded-lg">
      <div className="relative text-muted-foreground w-[379px]">
        <Link href={`/searchPage?searchValue=${searchValue}`}>
          <Search className="w-4 h-4 absolute -translate-y-1/2 left-3 top-1/2" />
        </Link>
        <Input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className=
            "pl-[38px] border-1 shadow-none sm:w-[400px] w-[120px]" 
        />
      </div>

      {/* {movies?.results?.length > 0 && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )} */}
    </div>
  );
};