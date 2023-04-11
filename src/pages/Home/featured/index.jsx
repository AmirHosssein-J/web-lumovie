import { useQuery } from "react-query";

import Posters from "/src/components/Posters";
import OnLoading from "/src/components/Posters/OnLoading";
import ErrorText from "/src/pages/Error/ErrorText";

const Featured = () => {
  const { isLoading, error, isError, data } = useQuery("featuredMovies", () =>
    fetch("http://localhost:3000/featured").then((res) => res.json())
  );

  if (isError) return <ErrorText message={error.message} />;

  return <>{isLoading ? <OnLoading /> : <Posters data={data} />}</>;
};

export default Featured;
