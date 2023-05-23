import S from "../posters.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = () => {
  return (
    <div
      className={S["poster"]}
      style={{
        display: "block",
        lineHeight: 1,
      }}
    >
      <SkeletonTheme baseColor="#050505" highlightColor="#222">
        <Skeleton className={S["poster-img"]} />
      </SkeletonTheme>
    </div>
  );
};

export default OnLoading;
