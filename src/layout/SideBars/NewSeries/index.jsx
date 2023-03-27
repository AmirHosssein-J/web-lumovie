import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useQuery } from "react-query";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceNewSeries";

import styles from "./new-series.module.scss";

import Button from "/src/components/Button";
import Serie from "/src/components/Cards/Serie";
import SectionHeader from "/src/components/Cards/SectionHeader";
import ErrorText from "/src/pages/Error/ErrorText";

import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";

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
          ? `${styles["aside"]}`
          : `${styles["aside"]} ${styles["aside--closed"]}`
      }
    >
      <Button.Icon
        className={
          !isNewSeriesClosed
            ? `${styles["aside-toggle"]}`
            : `${styles["aside-toggle"]} ${styles["aside-toggle--closed"]}`
        }
        icon={<IC_ArrowSM />}
        width={2}
        height={2}
        border
        rounded={100}
        alt={"arrow icon"}
        onClick={() => {
          dispatch(toggle(!isNewSeriesClosed));
        }}
      />

      <SectionHeader
        className={styles["header"]}
        seemore={"See More"}
        title={"New Release Series"}
      />

      <div className={styles["cards"]}>
        {error && <ErrorText message={error.message} />}
        {!data ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={186} borderRadius={10} count={6} />
          </SkeletonTheme>
        ) : (
          data.map((series, index) => {
            return (
              <Serie
                key={index}
                poster={series.poster}
                title={series.title}
                szn={series.szn}
                ep={series.ep}
                href={series.href}
                whatsNew={series.whatsNew}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};

export default NewReleaseSeries;
