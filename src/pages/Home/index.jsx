import S from "./home.module.scss";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Bookmark from "/src/components/Cards/Bookmark";
import Cinema from "/src/components/Cards/Cinema";
import Upcomings from "/src/components/Cards/Upcomings";
import SerieSideBar from "/src/layout/SideBars/SerieSideBar";

import Featured from "./Featured";
import NewRelease from "./NewRelease";
import Popular from "./Popular";

const Home = () => {
  const onTabletOrMobile = useMediaQuery({ query: "(max-width: 61.875rem)" });

  return (
    <div className={S["home"]}>
      <section
        className={`${onTabletOrMobile ? S["content--mobile"] : ""} ${
          S["content"]
        }`}
      >
        {/* <Featured /> */}
        <NewRelease />

        <Upcomings />
        <Popular />

        {/* quick access cards, main feature in progress */}
        <div className={S["quick-access"]}>
          <Bookmark isPlaceholder />
          <Cinema isPlaceholder />
        </div>
      </section>

      <MediaQuery minWidth="40rem">
        <SerieSideBar />
      </MediaQuery>
    </div>
  );
};

export default Home;
