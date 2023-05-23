import S from "./posters.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = () => {
  return (
    <div
      className={S["posters"]}
      style={{
        display: "block",
        lineHeight: 1,
        marginBlock: "1.125rem",
      }}
    >
      <SkeletonTheme baseColor="#050505" highlightColor="#222">
        <Skeleton className={S["poster"]} />
      </SkeletonTheme>
    </div>
  );
};

export default OnLoading;
