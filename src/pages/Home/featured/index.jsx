import { useQuery } from "@tanstack/react-query";

import Posters from "/src/components/Posters";
import OnLoading from "/src/components/Posters/OnLoading";
import ErrorText from "/src/pages/Error/ErrorText";

import useFetch from "/src/hooks/useFetch";

const Featured = () => {
  const query = useQuery({
    queryKey: ["featured"],
    queryFn: () =>
      useFetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1b10176a16c36b444c7c73221e99d0c5&language=en-US&page=1&region=DE"
      ),
  });

  if (query.isError) return <ErrorText message={error.message} />;

  return (
    <>
      {query.isLoading ? <OnLoading /> : <Posters data={query.data.results} />}
    </>
  );
};

export default Featured;
