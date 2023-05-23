import S from "../movie-section.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = ({ className, hasHeader }) => {
  return (
    <div className={`${className ? className : ""} ${S["skeletons"]}`}>
      <SkeletonTheme baseColor="#050505" highlightColor="#222">
        {hasHeader && <Skeleton className={S["header"]} />}
        <Skeleton className={S["list-skeleton"]} />
      </SkeletonTheme>
    </div>
  );
};

export default OnLoading;
