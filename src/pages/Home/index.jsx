import { useQuery } from "@tanstack/react-query";
import { BASE_URL, API_KEY } from "/src/api";

import useFetch from "/src/hooks/useFetch";

import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Posters/OnLoading";
import Posters from "/src/components/Posters";

import S from "./home.module.scss";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Bookmark from "/src/components/Cards/Bookmark";
import Cinema from "/src/components/Cards/Cinema";
import Upcomings from "/src/components/Cards/Upcomings";
import SerieSideBar from "/src/layout/SideBars/SerieSideBar";

// import Featured from "./Featured";
import NewRelease from "./NewRelease";
import Popular from "./Popular";

const Home = () => {
  const onTabletOrMobile = useMediaQuery({ query: "(max-width: 61.875rem)" });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["featured"],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=2`
      ),
  });

  if (isLoading) return <OnLoading />;
  if (isError) return <ErrorText message={error.message} />;

  return (
    <div className={S["home"]}>
      <section
        className={`${onTabletOrMobile ? S["content--mobile"] : ""} ${
          S["content"]
        }`}
      >
        <Posters data={data.results} />
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
