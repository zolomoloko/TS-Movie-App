import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";

type CarouselImage = {
    src: string;
}
export const CarouselImage = ({ src }: CarouselImage) => {

  return (
    <AsyncImage
      src={src}
      className="w-screen min-h-[246px] lg:h-[900px]"
      Transition={Blur}
    />
  );
};
