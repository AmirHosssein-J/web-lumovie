import styles from "./home.module.scss";

import Bookmark from "/src/components/Cards/Bookmark";
import Cinema from "/src/components/Cards/Cinema";
import Upcomings from "/src/components/Cards/Upcomings";
import NewSeries from "/src/layout/SideBars/NewSeries";

import Featured from "./Featured";
import NewRelease from "./NewRelease";
import useWindowSize from "/src/hooks/useWindowSize";
import { useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles["home"]}>
      <section
        className={`${width <= 991 ? `${styles["content--mobile"]}` : ""} ${
          styles["content"]
        }`}
      >
        <Featured />

        <NewRelease />

        <Upcomings />

        {/* quick access cards */}
        <div className={styles["quick-access"]}>
          <Bookmark isPlaceholder />
          <Cinema isPlaceholder />
        </div>
      </section>
      {/* 
      <NewSeries /> */}
    </div>
  );
};

export default Home;
