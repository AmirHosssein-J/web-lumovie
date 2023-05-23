import S from "./sectionheader.module.scss";

import Button from "../../Button";
import { Link } from "react-router-dom";

import IC_ArrowLG from "/src/assets/icon/IC_ArrowLG";

const SectionHeader = ({
  arrows,
  seemore,
  title,
  href,
  swiperRef,
  className,
}) => {
  return (
    <header className={S["section-header"]}>
      <div
        className={`
           ${className ? className : ""}
           ${S["details"]}
        `}
      >
        <h3 className={S["title"]}>{title}</h3>
        {seemore && (
          <Link to={href}>
            <Button.Link
              text="See More"
              icon={<IC_ArrowLG />}
              alt="arrow icon"
            />
          </Link>
        )}
      </div>

      {arrows && (
        <>
          <div className={S["arrows"]}>
            <Button.Arrow
              className={S["arrow-prev"]}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <Button.Arrow
              className={S["arrow-next"]}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </>
      )}
    </header>
  );
};

export default SectionHeader;
