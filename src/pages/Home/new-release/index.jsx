import { useQuery } from "react-query";

import MoviesSection from "/src/components/Cards/MoviesSection";

const NewRelease = () => {
  const { error, data } = useQuery("newMovies", () =>
    fetch("http://localhost:3000/new-movies").then((res) => res.json())
  );

  return (
    <>
      {error && console.log(`Featured Movie Posters ${error.message}`)}
      <MoviesSection
        moviesData={data}
        href={"./new-release"}
        title={"New Release"}
      />
    </>
  );
};

export default NewRelease;
