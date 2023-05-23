import S from "./movie-list.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = () => {
  return (
    <SkeletonTheme baseColor="#050505" highlightColor="#222">
      <div className={S["container"]}>
        <Skeleton className={S["skeleton"]} />
      </div>
    </SkeletonTheme>
  );
};

export default OnLoading;
