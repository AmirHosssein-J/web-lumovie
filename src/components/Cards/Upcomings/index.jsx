import MovieSection from "/src/components/Movie/MovieSection";

const Popular = () => {
  return (
    <MovieSection
      CATEGORY_NAME="upcoming"
      PAGE="1"
      title="upcomings"
      loadingHasHeader
      hasBorder
      hasSeeMore
      hasHalfWidth
    />
  );
};

export default Popular;
