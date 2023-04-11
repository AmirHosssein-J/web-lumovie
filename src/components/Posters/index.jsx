import S from "./posters.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Poster from "./Poster";

const Posters = ({ data, isLoading }) => {
  return (
    <section className={S["posters"]}>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView="auto"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((poster, index) => {
          return (
            <SwiperSlide key={index}>
              <Poster
                key={poster.id}
                img={poster.widePoster}
                alt={`${poster.title} poster`}
                path={poster.path}
                type={poster.type}
                isLoading={isLoading}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Posters;
