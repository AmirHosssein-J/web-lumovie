import S from "../movie.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = ({ className,isHeader }) => {
  return (
    <SkeletonTheme baseColor="#181818" highlightColor="#444">
      <div className={`${className ? className : ""} ${S["container"]}`}>
        {isHeader && <Skeleton height={32}></Skeleton>}
        <div className={S["skeletons"]}>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} className={S["skeleton"]} />
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default OnLoading;
