import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from "../movie.module.scss";

import Movie from "../Movie";

const Movies = ({ data, swiperRef, isCompact }) => {
  return (
    <section className={`${styles["movies-list"]}`}>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {data &&
          data.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Movie
                  key={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  releasedDate={movie.releasedDate}
                  releaseDate={movie.releaseDate}
                  runTime={movie.runTime}
                  rated={movie.rated}
                  imdbScore={movie.imdbScore}
                  path={movie.path}
                  type={movie.type}
                  img={movie.poster}
                  isTrailer={movie.isTrailer}
                  isCompact={isCompact}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Movies;
