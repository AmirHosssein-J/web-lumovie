import { useQuery } from "react-query";

import Posters from "/src/components/Posters";

const Featured = () => {
  const { error, data } = useQuery("featuredMovies", () =>
    fetch("http://localhost:3000/featured").then((res) => res.json())
  );

  return (
    <>
      {error && console.log(`Featured Movie Posters ${error.message}`)}
      <Posters data={data} />
    </>
  );
};

export default Featured;
