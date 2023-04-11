import { useQuery } from "react-query";

import ErrorText from "/src/pages/Error/ErrorText";
import MoviesSection from "/src/components/Cards/MoviesSection";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";

// import db from "/src/assets/data/db.json";

const NewRelease = () => {
  const { isLoading, error, isError, data } = useQuery("new_movies", () =>
    fetch("http://localhost:3000/new_movies").then((res) => res.json())
  );

  if (isError) return <ErrorText message={error.message} />;

  return (
    <>
      {isLoading ? (
        <OnLoading isHeader/>
      ) : (
        <MoviesSection
          moviesData={data}
          href={"./new-release"}
          title={"New Release"}
        />
      )}
    </>
  );
};

export default NewRelease;
