import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
type CartImageProps = {
    src: string;
}
export const CartImage = ({ src }: CartImageProps) => {

  return (
    <AsyncImage
      src={src}
      style={{ width: "100%", height: "auto", aspectRatio: 3 / 4 }}
      Transition={Blur}
    />
  );
};
