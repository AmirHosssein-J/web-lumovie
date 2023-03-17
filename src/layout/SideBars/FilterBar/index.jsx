import { useState } from "react";
import styles from "./filterbar.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceListGrid";

import Box from "./Box";
import Button from "/src/components/Button";

import IC_GridOne from "/src/assets/icon/IC_GridOne";
import IC_GridTwo from "/src/assets/icon/IC_GridTwo";

const FilterBar = () => {
  const isMoviesCompact = useSelector((state) => state.isMoviesCompact.value);
  const dispatch = useDispatch();

  const [genres, setGenres] = useState([
    { title: "action" },
    { title: "drama" },
    { title: "horror" },
    { title: "comedy" },
    { title: "fantasy" },
    { title: "crime" },
    { title: "thriller" },
    { title: "historical" },
    { title: "adventure" },
    { title: "mystery" },
  ]);

  const [type, setType] = useState([
    { title: "movie" },
    { title: "series" },
    { title: "anime" },
    { title: "animation" },
  ]);

  const [score, setScore] = useState([
    { title: 4 },
    { title: 5 },
    { title: 6 },
    { title: 7 },
    { title: 8 },
    { title: 9 },
  ]);

  const [country, setCountry] = useState([
    { title: "USA", flag: "/src/assets/country-flag/USA.png" },
    { title: "France", flag: "/src/assets/country-flag/France.png" },
    { title: "England", flag: "/src/assets/country-flag/England.png" },
    { title: "Germany", flag: "/src/assets/country-flag/Germany.png" },
    { title: "Japan", flag: "/src/assets/country-flag/Japan.png" },
    { title: "China", flag: "/src/assets/country-flag/China.png" },
    { title: "Iran", flag: "/src/assets/country-flag/Iran.png" },
    { title: "Korea", flag: "/src/assets/country-flag/Korea.png" },
    { title: "New Zealand", flag: "/src/assets/country-flag/NewZealand.png" },
  ]);

  console.log("bar");

  return (
    <aside className={styles["filter-bar"]}>
      <header className={styles["header"]}>
        <h3 className={styles["title"]}>Filter</h3>
        <div className={styles["grids"]}>
          {/* normal card movies */}
          <Button.Icon
            className={`${styles["button"]} ${
              !isMoviesCompact && `${styles["button--active"]}`
            }`}
            icon={<IC_GridOne />}
            // className={!isMoviesCompact && `${styles["button--active"]}`}
            width={3.25}
            height={3.25}
            rounded={100}
            onClick={() => dispatch(toggle(false))}
            tooltip={"Normal"}
          />

          {/* compact card movies */}
          <Button.Icon
            className={`${styles["button"]} ${
              isMoviesCompact && `${styles["button--active"]}`
            }`}
            icon={<IC_GridTwo />}
            width={3.25}
            height={3.25}
            rounded={100}
            onClick={() => dispatch(toggle(true))}
            tooltip={"Compact"}
          />
        </div>
      </header>
      <section className={styles["content"]}>
        <Box title={"Genre"} options={genres} search />
        <Box title={"Type"} options={type} />
        <Box title={"Score"} options={score} />
        <Box title={"Country"} options={country} search />
      </section>

      {/* <footer>
        <Button.CTA
          text={"Apply Filter"}
          width={20}
          rounded={0}
          type={"submit"}
        />
      </footer> */}
    </aside>
  );
};

export default FilterBar;
