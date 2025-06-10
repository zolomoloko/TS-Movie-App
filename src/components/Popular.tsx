"use client"
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCart";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Movie } from "@/types";
import { getPopularMovies } from "@/utils/getPopular";

export const Popular = () => {

    const [upPopularMovies, setUpPopularMovies] = useState<Movie[]>([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true)
        const popMovies = async () => {
            const upPopularMovies = await getPopularMovies();
            const firstTenMovies = upPopularMovies.results?.slice(0, 10)
            setUpPopularMovies(firstTenMovies)
        };
        popMovies();
        // setLoading(false)
    }, [])
    return(
        <div className="flex flex-col p-[20px] gap-[32px] w-screen md:max-w-[1800px] mx-auto">
            <div className="flex justify-between">
                <b className="font-semibold text-[24px]">Popular</b>
                <Link href={`category/popular`}>
                  <p className="flex font-medium gap-[8px] items-center">See more <ArrowRight className="w-[16px] h-[16px]"/></p>
                </Link>
            </div>
            <div className="grid  gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {/* {loading && <MoviePosterLoading/>} */}
                {upPopularMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}