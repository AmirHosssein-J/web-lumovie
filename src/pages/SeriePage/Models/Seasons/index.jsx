import S from "../models.module.scss";
import Season from "./Season";

import Container from "/src/components/HOC/Container";
import Wrapper from "/src/components/HOC/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useRef } from "react";
import SectionHeader from "../../../../components/Cards/SectionHeader";

const Seasons = ({
  seasons,
  title,
  href,
  hasMaxWidth,
  hasBorder,
  hasSeeMore,
}) => {
  const swiperRef = useRef(null);

  return (
    // <section className={S["seasons"]}>
    <Container
      className={S["container"]}
      style={{ maxWidth: hasMaxWidth && "75rem" }}
    >
      <Wrapper
        className={`
          ${S["wrapper"]}
          ${hasBorder ? S["wrapper-border"] : S["wrapper-normal"]} 
        `}
      >
        <SectionHeader
          title="Seasons"
          arrows
          swiperRef={swiperRef}
          href={href}
          seemore={hasSeeMore}
        />
        <section className={S["seasons"]}>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            {seasons.map((season, index) => {
              return (
                <SwiperSlide key={index}>
                  <Season season={season} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        {/* <section className={S["seasons"]}>
          {seasons.map((season) => {
            return <Season season={season} />;
          })}
        </section> */}
      </Wrapper>
    </Container>
    // </section>
  );
};

export default Seasons;
