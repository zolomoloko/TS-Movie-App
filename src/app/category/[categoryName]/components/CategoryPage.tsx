"use client"

import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCart";
import { MovieDetails } from "@/types";
import { getCategory } from "@/utils/getCategory";
import { useRouter } from "next/router";


import { useEffect, useState } from "react";

const CategoryPage = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  const [movieCategory, setMovieCategory] = useState({});
  // const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
console.log("movieCategory",movieCategory);

  useEffect(() => {
    if (!categoryName) return;
    const getMovieCategory = async () => {
      const data = await getCategory(categoryName);

      setMovieCategory(data);
    };
    getMovieCategory();
  }, [categoryName]);

  return (
    <div>
      {/* <Header /> */}

      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:max-w-[1800px] mx-auto pt-[52px]">
        {/* {movieCategory.results?.map((movie) => (
          <MovieCard movie={movie} />
        ))} */}
      </div>

      {/* <CategoryFrame
        page={page}
        setPage={setPage}
        movieCategory={movieCategory}
      /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default CategoryPage;