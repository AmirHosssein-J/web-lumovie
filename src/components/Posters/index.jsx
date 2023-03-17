import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import styles from "./poster.module.scss";

import Poster from "./Poster";

const Posters = ({ data }) => {
  return (
    <section className={`${styles["posters"]}`}>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
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
                path={poster.path}
                img={poster.widePoster}
                alt={poster.title}
                type={poster.type}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Posters;
