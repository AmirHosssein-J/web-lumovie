import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRef } from "react";
import { useQuery } from "react-query";

import styles from "./upcomings.module.scss";

import Wrapper from "../../HOC/Wrapper";
import SectionHeader from "../SectionHeader";
import Movies from "../MoviesSection/Movies";
import ErrorText from "/src/pages/Error/ErrorText";

const Upcomings = () => {
  const swiperRef = useRef();

  const { isLoading, error, data } = useQuery("upcomings", () =>
    fetch("http://localhost:3000/upcomings").then((res) => res.json())
  );

  return (
    <Wrapper className={`${styles["upcomings"]}`}>
      <SectionHeader
        title={"Upcomings"}
        arrows
        seemore={"See More"}
        swiperRef={swiperRef}
      />
      <div className={styles["movies"]}>
        {error && console.log(`Upcoming Movies ${error.message}`)}

        {isLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={240} borderRadius={10} />
          </SkeletonTheme>
        ) : (
          <Movies data={data} swiperRef={swiperRef} />
        )}
      </div>
    </Wrapper>
  );
};

export default Upcomings;
