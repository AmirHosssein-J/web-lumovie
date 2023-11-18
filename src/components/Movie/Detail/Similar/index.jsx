import MoviesSection from "/src/components/Cards/MoviesSection";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";
import useSimilarMovies from "/src/hooks/useSimilar";

const Similar = ({ movieId }) => {
  const { data, isLoading } = useSimilarMovies(movieId);
  if (isLoading) return <OnLoading />;
  const movies = data.results;

  return (
    <>
      {movies.length && (
        <MoviesSection
          title="Similar Movies"
          moviesData={movies}
          hasMaxWidth
          hasBorder
        />
      )}
    </>
  );
};

export default Similar;
