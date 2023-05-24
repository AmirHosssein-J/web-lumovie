import S from "./posters.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Poster from "./Poster";

const Posters = ({ data }) => {
  return (
    <section className={S["posters"]}>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((poster, index) => {
          return (
            <SwiperSlide key={index}>
              <Poster key={poster.id} id={poster.id} path={poster.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Posters;
