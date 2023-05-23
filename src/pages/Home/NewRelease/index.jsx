import MovieSection from "/src/components/Movie/MovieSection";

const Popular = () => {
  return (
    <MovieSection
      CATEGORY_NAME="now_playing"
      PAGE="1"
      title="new release"
      href="new-relase"
      loadingHasHeader
      hasSeeMore
    />
  );
};

export default Popular;
