import styles from "./sectionheader.module.scss";

import Button from "../../Button";

import IC_ArrowLG from "/src/assets/icon/IC_ArrowLG";
import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";

const SectionHeader = ({
  arrows,
  seemore,
  title,
  href,
  swiperRef,
  className,
}) => {
  return (
    <header className={`${styles["section-header"]}`}>
      <div className={`${className && className} ${styles["details"]}`}>
        <h3 className={`${styles["title"]}`}>{title}</h3>
        {seemore && (
          <Button.Link
            text={"See More"}
            href={href}
            icon={<IC_ArrowLG />}
            alt={"arrow icon"}
          />
        )}
      </div>

      {arrows && (
        <div className={`${styles["arrows"]}`}>
          <Button.Icon
            className={`${styles["arrow-prev"]}`}
            height={2}
            width={2}
            border
            rounded={100}
            icon={<IC_ArrowSM />}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Button.Icon
            className={`${styles["arrow-next"]}`}
            height={2}
            width={2}
            border
            rounded={100}
            icon={<IC_ArrowSM />}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      )}
    </header>
  );
};

export default SectionHeader;
