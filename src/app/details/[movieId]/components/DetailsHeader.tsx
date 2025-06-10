"use client"
import { MovieTrailer } from "@/components/MovieTrailer";
import { MovieDetails } from "@/types";
import { getMovieById } from "@/utils/getMovieById";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const DetailsHeader = ({ movieId }:  { movieId: string }) => {
  const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails);
  const time = movie?.runtime
  const runTime = `${Math.floor(time / 60)}h ${time % 60}m`;
  console.log("hi",movie)
  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieById(movieId);
        setMovie(data)
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };
    getMovie()
  }, );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between px-5 md:px-0">
        <div>
          <h1 className="font-semibold text-[24px] md:text-[36px]">
            {movie?.title}
          </h1>
          <h2 className="font-normal text-[14px] md:text-[18px]">
            {movie?.release_date} · PG · {runTime}
          </h2>
        </div>

        <div>
          <p className="font-medium text-[12px] hidden md:flex">Rating</p>
          <div className="flex gap-1 items-center">
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <div>
              <div className="flex font-normal text-[14px]">
                <p className="text-[#09090b] dark:text-white">
                  {movie?.vote_average?.toFixed(1)}
                </p>
                <p className="text-[#71717a]">/10</p>
              </div>
              <p className="font-normal text-[12px] text-[#71717a]">37k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative gap-5 min-h-[210px] md:max-h-[728px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt="cart"
          className="hidden md:flex w-1/3 object-cover"
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="md:w-2/3 object-cover"
        />
        <div className="absolute flex items-center gap-3 top-[75%] left-[10%] md:top-[80%] md:left-[38%]">
          <MovieTrailer movieId={movieId} />
          <p className="font-normal text-[16px] text-white">2:35</p>
        </div>
      </div>
    </div>
  );
};
