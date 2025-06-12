import { DetailsDirector } from "./components/DetailsDirector";
import { DetailsHeader } from "./components/DetailsHeader";
import { DetailsMoreLike } from "./components/DetailsMoreLike";

const DetailPage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div className="md:max-w-[1800px] mx-auto pt-[52px]">
      <DetailsHeader movieId={movieId} />
      <DetailsDirector id={movieId} />
      <DetailsMoreLike movieId={movieId} />
    </div>
  );
};
export default DetailPage;
