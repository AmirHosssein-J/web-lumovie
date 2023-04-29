import S from "./new-series.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useQuery } from "@tanstack/react-query";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceNewSeries";

import Button from "/src/components/Button";
import Serie from "/src/components/Cards/Serie";
import SectionHeader from "/src/components/Cards/SectionHeader";
import ErrorText from "/src/pages/Error/ErrorText";

const NewReleaseSeries = () => {
  const isNewSeriesClosed = useSelector(
    (state) => state.isNewSeriesClosed.value
  );
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery("newSeries", () =>
    fetch("http://localhost:3000/new-series").then((res) => res.json())
  );

  return (
    <aside
      className={
        !isNewSeriesClosed
          ? `${S["aside"]}`
          : `${S["aside"]} ${S["aside--closed"]}`
      }
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
        title="New Release Series"
      />

      <div className={S["cards"]}>
        {error && <ErrorText message={error.message} />}
        {!data ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={186} borderRadius={10} count={6} />
          </SkeletonTheme>
        ) : (
          data.map((serie, index) => {
            return (
              <Serie
                key={index}
                poster={serie.poster}
                title={serie.title}
                szn={serie.szn}
                ep={serie.ep}
                href={serie.href}
                whatsNew={serie.whatsNew}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};

export default NewReleaseSeries;
