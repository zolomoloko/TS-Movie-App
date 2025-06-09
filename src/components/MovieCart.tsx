import { Movie } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { CartImage } from "./loadable-image/CartImage";
type MovieCardProps = {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-full rounded-[8px] bg-gray-50 shadow-lg overflow-hidden dark:bg-black dark:border-[1px] dark:shadow-lg dark:shadow-gray-800/50">
      <Link href={`/details/${movie?.id}`}>
        <CartImage
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        />
        <div className="p-[8px]">
          <div className="flex gap-[4px]">
            <Star className="h-[16px} w-[16px] fill-yellow-300 text-yellow-300" />
            <div className="flex">
              <p className="font-medium text-[#09090b] dark:text-white">
                {movie?.vote_average?.toFixed(1)}
              </p>
              <p className="font-medium text-[#71717a]">/10</p>
            </div>
          </div>
          <p className="font-medium h-[40px] text-[#09090b] dark:text-white">
            {movie?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};