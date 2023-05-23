import S from "./serie.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OnLoading = () => {
  return (
    <div
      className={S["series"]}
      style={{
        display: "block",
        lineHeight: 0,
      }}
    >
      <SkeletonTheme
        baseColor="#050505"
        highlightColor="#222"
        borderRadius={12}
      >
        <Skeleton className={S["series"]} />
      </SkeletonTheme>
    </div>
  );
};

export default OnLoading;
