"use client"
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { Movie } from "@/types";
import { getNowPlayingMovies } from "@/utils/getCarousel";

export const MovieCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(false)
  useEffect(()=>{
    // setLoading(true);
    const fetchMovies = async ()=>{
      const movies = await getNowPlayingMovies();
      setNowPlayingMovie(movies);
    };
    fetchMovies()
    // setLoading(false)
  }, []);
//   if(loading) return <HomePageLoading />;
  return (
    <div>
      <Carousel
        className="relative"  
        plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      >
        <CarouselContent>
          {nowPlayingMovie?.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCarouselItem
                 movie={movie}
                  movieId={movie.id}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible md:visible absolute left-10 to-50%"/>
        <CarouselNext className="invisible md:visible absolute right-10 to-50%"/>
      </Carousel>
    </div>
  );
};
