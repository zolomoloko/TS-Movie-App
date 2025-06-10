import { DetailsHeader } from "./components/DetailsHeader";

const DetailPage = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
console.log(movieId)

  return (
    <div>
        <DetailsHeader movieId={movieId}/>
    </div>
  )
};
export default DetailPage;
