import S from "./upcomings.module.scss";

import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import useFetch from "/src/hooks/useFetch";

import Wrapper from "../../HOC/Wrapper";
import SectionHeader from "../SectionHeader";
import Movies from "../MoviesSection/Movies";
import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";

const Upcomings = () => {
  const swiperRef = useRef();
  const query = useQuery({
    queryKey: ["upcomings"],
    queryFn: () =>
      useFetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1b10176a16c36b444c7c73221e99d0c5&page=1"
      ),
  });

  if (query.isError) return <ErrorText message={query.error.message} />;

  return (
    <Wrapper className={S["upcomings"]}>
      {query.isLoading ? (
        <OnLoading className={S["skeletons"]} isHeader />
      ) : (
        <>
          <SectionHeader
            title="Upcomings"
            arrows
            seemore="See More"
            swiperRef={swiperRef}
          />
          <div className={S["movies"]}>
            <Movies data={query.data.results} swiperRef={swiperRef} />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Upcomings;
