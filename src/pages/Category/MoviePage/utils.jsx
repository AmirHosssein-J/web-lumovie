import useTitle from "/src/hooks/useTitle";

export async function getMovie(path, api) {
  let movies = await (await fetch(api)).json();

  const movie = movies.results.find((movie) => {
    const title = useTitle(movie.title);
    const id = movie.id.toString();

    return path === `${id}-${title}`;
  });

  return movie ?? null;
}

export async function getMovieDetails(id) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1b10176a16c36b444c7c73221e99d0c5&language=en-US`
  ).then((res) => res.json());
  return response ?? null;
}
