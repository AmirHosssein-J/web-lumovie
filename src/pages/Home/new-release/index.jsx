import { useQuery } from "react-query";

import MoviesSection from "/src/components/Cards/MoviesSection";

const NewRelease = () => {
  const { isLoading, error, data } = useQuery("newMovies", () =>
    fetch("http://localhost:3000/new-movies").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <MoviesSection
      moviesData={data}
      href={"./new-release"}
      title={"New Release"}
    />
  );
};

export default NewRelease;
