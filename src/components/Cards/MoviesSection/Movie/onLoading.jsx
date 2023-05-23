import S from "./movie.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const onLoading = () => {
  return (
    <div
      className={S["movie"]}
      style={{
        display: "block",
        lineHeight: 1,
      }}
    >
      <SkeletonTheme
        baseColor="#050505"
        highlightColor="#222"
        borderRadius={12}
      >
        <Skeleton className={S["movie"]} />
      </SkeletonTheme>
    </div>
  );
};

export default onLoading;
