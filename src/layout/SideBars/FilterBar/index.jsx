import S from "./filterbar.module.scss";

import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceListGrid";

import FilterCategory from "./FilterCategory";
import Button from "/src/components/Button";

import IC_GridOne from "/src/assets/icon/IC_GridOne";
import IC_GridTwo from "/src/assets/icon/IC_GridTwo";
import { Form } from "react-router-dom";

export async function loader({ request }) {
  let url = new URL(request.url);
  let genre = url.searchParams.getAll("genre");
  let type = url.searchParams.getAll("type");
  let score = url.searchParams.getAll("score");
  let country = url.searchParams.getAll("country");

  return { genre, type, score, country };
}

const FilterBar = ({ onSubmit }) => {
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
    { title: "serie" },
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
    { title: "usa", flag: "/src/assets/country-flag/usa.png" },
    { title: "france", flag: "/src/assets/country-flag/france.png" },
    { title: "england", flag: "/src/assets/country-flag/england.png" },
    { title: "germany", flag: "/src/assets/country-flag/germany.png" },
    { title: "japan", flag: "/src/assets/country-flag/japan.png" },
    { title: "china", flag: "/src/assets/country-flag/china.png" },
    { title: "iran", flag: "/src/assets/country-flag/iran.png" },
    { title: "korea", flag: "/src/assets/country-flag/korea.png" },
    { title: "new zealand", flag: "/src/assets/country-flag/new-zealand.png" },
  ]);

  return (
    <aside className={S["filter-bar"]}>
      <header className={S["header"]}>
        <h3 className={S["title"]}>Filter</h3>
        <div className={S["grids"]}>
          {/* normal card movies */}
          <Button.Icon
            className={`${S["button"]} ${
              !isMoviesCompact && `${S["button--active"]}`
            }`}
            icon={<IC_GridOne />}
            dimension={3.25}
            rounded={100}
            onClick={() => dispatch(toggle(false))}
            tooltip="Normal"
          />

          {/* compact card movies */}
          <Button.Icon
            className={`${S["button"]} ${
              isMoviesCompact && `${S["button--active"]}`
            }`}
            icon={<IC_GridTwo />}
            dimension={3.25}
            rounded={100}
            onClick={() => dispatch(toggle(true))}
            tooltip="Compact"
          />
        </div>
      </header>

      <Form className={S["content"]} action="/filter" onSubmit={onSubmit}>
        {/* <Button.CTA text="Apply Filter" type="submit" /> */}
        <FilterCategory title="genre" options={genres} search />
        <FilterCategory title="type" options={type} />
        <FilterCategory title="score" options={score} />
        <FilterCategory title="country" options={country} search />
      </Form>
    </aside>
  );
};

export default FilterBar;
