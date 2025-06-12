export const getDetailsMoreLike = async (id: string) => {
   try {
     const response=await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/similar?language=en-US&page=1`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    )
    const same = await response.json();
    return same;
   } catch (error) {
    console.log(error)
   }
}