import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { UpComing } from "@/components/UpComing";

export default function Home() {
  return (
    <div>
      <MovieCarousel/>
      <UpComing/>
      <Popular/>
      <TopRated/>
    </div>
  );
}
