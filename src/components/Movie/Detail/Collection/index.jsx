import useCollection from "/src/hooks/useCollection";

import MoviesSection from "/src/components/Cards/MoviesSection";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";

const Collection = ({ collection }) => {
  const { data, isLoading } = useCollection(collection.id);
  if (isLoading) return <OnLoading />;
  const movies = data.parts;

  return (
    <MoviesSection
      title={collection.name}
      moviesData={movies}
      hasBorder
      hasMaxWidth
    />
  );
};

export default Collection;
