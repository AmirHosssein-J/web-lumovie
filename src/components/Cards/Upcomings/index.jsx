import { useRef } from "react";
import { useQuery } from "react-query";

import styles from "./upcomings.module.scss";

import Wrapper from "../../HOC/Wrapper";
import SectionHeader from "../SectionHeader";
import Movies from "../MoviesSection/Movies";

const Upcomings = () => {
  const swiperRef = useRef();

  const { isLoading, error, data } = useQuery("upcomings", () =>
    fetch("http://localhost:3000/upcomings").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <Wrapper className={`${styles["upcomings"]}`}>
      <SectionHeader
        title={"Upcomings"}
        arrows
        seemore={"See More"}
        swiperRef={swiperRef}
      />
      <div className={styles["movies"]}>
        <Movies data={data} swiperRef={swiperRef} />
      </div>
    </Wrapper>
  );
};

export default Upcomings;
