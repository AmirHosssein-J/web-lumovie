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
      <Movies data={moviesData} isCompact={compactCard} swiperRef={swiperRef} />
    </section>
  );
};

export default MoviesSection;
