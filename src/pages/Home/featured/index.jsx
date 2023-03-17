import { useQuery } from "react-query";

import Posters from "/src/components/Posters";

const Featured = () => {
  const { isLoading, error, data } = useQuery("featuredMovies", () =>
    fetch("http://localhost:3000/featured").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return <Posters data={data} />;
};

export default Featured;
