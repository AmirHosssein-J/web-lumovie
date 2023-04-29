import { useQuery } from "@tanstack/react-query";

import useFetch from "/src/hooks/useFetch";

import ErrorText from "/src/pages/Error/ErrorText";
import MoviesSection from "/src/components/Cards/MoviesSection";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";

const NewRelease = () => {
  const query = useQuery({
    queryKey: ["latest"],
    queryFn: () =>
      useFetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1b10176a16c36b444c7c73221e99d0c5&page=2"
      ),
  });

  if (query.isError) return <ErrorText message={query.error.message} />;

  return (
    <>
      {query.isLoading ? (
        <OnLoading isHeader />
      ) : (
        <MoviesSection
          moviesData={query.data.results}
          href="./new-release"
          title="New Release"
        />
      )}
    </>
  );
};

export default NewRelease;
