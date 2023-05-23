import S from "./search.module.scss";
import { BASE_URL, API_KEY } from "/src/api";
import { Fragment, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

import SearchError from "/src/pages/Error/SearchError";
import ErrorText from "/src/pages/Error/ErrorText";
import useFetch from "/src/hooks/useFetch";
import Movie from "/src/components/Cards/MoviesSection/Movie";
import Loading from "/src/pages/Loading";
import Logo from "/src/components/Logo";

const Search = () => {
  const { ref, inView } = useInView();

  const onTablet = useMediaQuery({ query: "(max-width: 64.938rem)" });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["search-query", searchQuery],
      queryFn: ({ pageParam = 1 }) =>
        useFetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${pageParam}&include_adult=false&region=US`
        ),

      getNextPageParam: (lastPage, pages) =>
        lastPage.total_pages === pages.length ? undefined : pages.length + 1,
    });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorText message={error.message} />;

  // if result didn`t found
  if (data.pages[0].results.length === 0) return <SearchError />;

  return (
    <section className={S["content"]}>
      <div className={S["movie-list"]}>
        {data.pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page.results.map((movie) => {
                return (
                  <Movie
                    className={onTablet ? S["movie-card"] : ""}
                    key={movie.id}
                    movie={movie}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
      {/* show a loading spinner when loading for new page */}
      {hasNextPage && (
        <div ref={ref} className={S["loading-spinner"]}>
          <Logo spinner noLogoText />
        </div>
      )}
    </section>
  );
};

export default Search;
