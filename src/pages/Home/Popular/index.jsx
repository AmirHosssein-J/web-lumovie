import MovieSection from "/src/components/Movie/MovieSection";

const Popular = () => {
  return (
    <MovieSection
      CATEGORY_NAME="popular"
      PAGE="2"
      title="popular"
      loadingHasHeader
      hasBorder
      hasSeeMore
    />
  );
};

export default Popular;
