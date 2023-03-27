import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useRef } from "react";

import styles from "./movie.module.scss";

import SectionHeader from "../SectionHeader";
import Movies from "./Movies";

const MoviesSection = ({ moviesData, title, href, compactCard }) => {
  const swiperRef = useRef();

  return (
    <section className={`${styles["movies"]}`}>
      <SectionHeader
        arrows
        seemore
        title={title}
        href={href}
        swiperRef={swiperRef}
      />

      {moviesData ? (
        <Movies
          data={moviesData}
          isCompact={compactCard}
          swiperRef={swiperRef}
        />
      ) : (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={240} borderRadius={10} />
        </SkeletonTheme>
      )}
    </section>
  );
};

export default MoviesSection;
