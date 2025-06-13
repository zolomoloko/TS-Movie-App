const CategoryPage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div className="md:max-w-[1800px] mx-auto pt-[52px]">
      
    </div>
  );
};
export default CategoryPage;