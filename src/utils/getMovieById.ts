export const getMovieById = async (movieId: string) => {
  try {
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );

  

  const kino = await response.json();
  return kino;
  } catch (error) {
    console.log(error)
  }
};
