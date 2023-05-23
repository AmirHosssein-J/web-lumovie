import S from "./serie-sidebar.module.scss";

import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "/src/api";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceNewSeries";

import Button from "/src/components/Button";
import Serie from "/src/components/Cards/Serie";
import SectionHeader from "/src/components/Cards/SectionHeader";
import ErrorText from "/src/pages/Error/ErrorText";

import useFetch from "/src/hooks/useFetch";
import OnLoading from "./OnLoading";

const SerieSideBar = () => {
  const isNewSeriesClosed = useSelector(
    (state) => state.isNewSeriesClosed.value
  );
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["new-series"],
    queryFn: () =>
      useFetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&region=en-GB&page=4`),
  });

  if (query.isLoading) return <OnLoading />;
  const newSeries = query.data.results;

  return (
    <aside
      className={`${!isNewSeriesClosed ? S["aside--closed"] : ""} ${
        S["aside"]
      }`}
    >
      <Button.Arrow
        className={
          !isNewSeriesClosed
            ? `${S["aside-toggle"]}`
            : `${S["aside-toggle"]} ${S["aside-toggle--closed"]}`
        }
        onClick={() => {
          dispatch(toggle(!isNewSeriesClosed));
        }}
      />

      <SectionHeader
        className={S["header"]}
        seemore="See More"
        title="Popular Shows This Week"
        href="/popular-series"
      />

      <div className={S["cards"]}>
        {newSeries.map((serie, index) => {
          return <Serie key={index} serieId={serie.id} />;
        })}
      </div>
    </aside>
  );
};

export default SerieSideBar;
