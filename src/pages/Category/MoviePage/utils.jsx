export async function getMovie(path, api) {
  let movies = await (await fetch(api)).json();
  let movie = movies.find((movie) => movie.path === path);
  return movie ?? null;
}
