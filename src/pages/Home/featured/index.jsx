// import { useQuery } from "@tanstack/react-query";
// import { BASE_URL, API_KEY } from "/src/api";

// import useFetch from "/src/hooks/useFetch";

// import ErrorText from "/src/pages/Error/ErrorText";
// import OnLoading from "/src/components/Posters/OnLoading";
// import Posters from "/src/components/Posters";

const Featured = () => {
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["featured"],
  //   queryFn: () =>
  //     useFetch(
  //       `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=2`
  //     ),
  // });

  // if (isLoading) return <OnLoading />;
  // if (isError) return <ErrorText message={error.message} />;

  return (
    <>
      <h1>hello</h1>
      {/* <Posters data={data.results} /> */}
    </>
  );
};

export default Featured;
