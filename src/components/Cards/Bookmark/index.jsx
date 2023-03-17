import { useRef } from "react";

import styles from "./bookmark.module.scss";

import Wrapper from "../../HOC/Wrapper";
import Button from "../../Button";
import SectionHeader from "../SectionHeader";
import Movies from "../MoviesSection";

import IC_Bookmark from "/src/assets/icon/IC_Bookmark";
import IC_BookmarkPH from "/src/assets/icon/IC_BookmarkPH";

// import DB_Upcomings from "/src/assets/data/DB_Upcomings.json";

const Bookmark = ({ isPlaceholder }) => {
  const swiperRef = useRef();

  return (
    <Wrapper
      className={
        isPlaceholder
          ? `${styles["bookmark"]} ${styles["bookmark--placeholder"]}`
          : `${styles["bookmark"]} ${styles["bookmark--include-content"]}`
      }
    >
      {isPlaceholder ? (
        <SectionHeader title={"Bookmarks"} />
      ) : (
        <SectionHeader
          title={"Bookmarks"}
          arrows
          seemore={"See More"}
          swiperRef={swiperRef}
        />
      )}
      {isPlaceholder ? (
        <div className={styles["content"]}>
          <h5 className={styles["title"]}>
            Click on {<IC_Bookmark className={styles["icon"]} />} icon to add
            movies to your bookmark list
          </h5>
          <Button.CTA text={"Bookmark List"} href={"./bookmarks"} />
          <Button.Link
            text={"Search for Movie to Add"}
            href={"./filter"}
            underline
          />
        </div>
      ) : (
        <div className={styles["movies"]}>
          {/* <Movies data={DB_Upcomings} swiperRef={swiperRef} /> */}
        </div>
      )}
      <IC_BookmarkPH className={styles["icon-placeholder"]} />
    </Wrapper>
  );
};

export default Bookmark;
