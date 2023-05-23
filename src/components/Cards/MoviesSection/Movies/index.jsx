import S from "./movies.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Movie from "../Movie";

const Movies = ({ data, swiperRef, isCompact }) => {
  return (
    <section className={S["movies-list"]}>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {data.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <Movie movie={movie} isCompact={isCompact} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Movies;
