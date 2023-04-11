import S from "../posters.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnLoading = () => {
  return (
    <SkeletonTheme baseColor="#181818" highlightColor="#444">
      <div className={`${S["skeletons"]} ${S["posters"]}`}>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index} className={S["skeleton"]} />
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default OnLoading;
