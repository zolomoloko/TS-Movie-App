import { Movie } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { CarouselImage } from "./loadable-image/CarouselImage";

type MovieCarouselItemProps = {
  movie: Movie;
  movieId: string;
};

export const MovieCarouselItem = ({
  movie,
  movieId,
}: MovieCarouselItemProps) => {
  return (
    <div className="relative">
      <Link href={`/details/${movieId}`}>
        <CarouselImage
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        />
      </Link>
      <div className="flex flex-col gap-[16px] m-[20px] md:absolute top-[340px] left-[140px] md:w-[404px] md:text-white">
        <div className="flex   justify-between items-center">
          <div>
            <p className="font-normal text-[14px]">Now Playing:</p>
            <p className="font-semibold text-[36px]">{movie?.title}</p>
          </div>

          <div className="flex gap-[4px] items-center">
            <Star className="h-[16px} w-[16px] fill-yellow-300 text-yellow-300" />
            <div className="flex">
              <p className="font-semibold text-[18px] text-[#09090b] md:text-white">
                {movie?.vote_average?.toFixed(1)}
              </p>
              <p className="font-medium text-[18px] text-gray-400">/10</p>
            </div>
          </div>
        </div>
        <p>{movie?.overview}</p>
        <div>{/* <MovieTrailer movieId={movieId}/> */}</div>
      </div>
    </div>
  );
};
