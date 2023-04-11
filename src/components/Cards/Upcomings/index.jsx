import S from "./upcomings.module.scss";

import { useRef } from "react";
import { useQuery } from "react-query";

import db from "/src/assets/data/db.json";

import Wrapper from "../../HOC/Wrapper";
import SectionHeader from "../SectionHeader";
import Movies from "../MoviesSection/Movies";
import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";

const Upcomings = () => {
  const swiperRef = useRef();

  const { isLoading, error, isError, data } = useQuery("upcomings", () =>
    fetch("http://localhost:3000/upcomings").then((res) => res.json())
  );

  if (isError) return <ErrorText message={error.message} />;

  return (
    <Wrapper className={S["upcomings"]}>
      {isLoading ? (
        <OnLoading className={S["skeletons"]} isHeader/>
      ) : (
        <>
          <SectionHeader
            title="Upcomings"
            arrows
            seemore="See More"
            swiperRef={swiperRef}
          />
          <div className={S["movies"]}>
            <Movies data={data} swiperRef={swiperRef} />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Upcomings;
