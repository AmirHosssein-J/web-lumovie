import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import styles from "./poster.module.scss";

import Poster from "./Poster";

const Posters = ({ data }) => {
  return (
    <section className={`${styles["posters"]}`}>
      {data ? (
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
      ) : (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={160} borderRadius={10} />
        </SkeletonTheme>
      )}
    </section>
  );
};

export default Posters;
