// import useTitle from "/src/hooks/useTitle";

// export async function getMovie(path, api) {
//   let movies = await (await fetch(api)).json();

//   const movie = movies.results.find((movie) => {
//     const title = useTitle(movie.title);
//     const id = movie.id.toString();

//     return path === `${id}-${title}`;
//   });

//   return movie ?? null;
// }
