import { getMovieTrailer } from "@/utils/getMovieTrailer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Button } from "./ui/button";

export const MovieTrailer = ({ movieId }: { movieId: string }) => {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
        // console.log("fff",data)
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const MovieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild >
        <Button variant="secondary" >
          <Play />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit bg-transparent border-none">
        <YouTube
          videoId={MovieTrailer?.key}
          opts={{
            height: "200",
            width: "400",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
