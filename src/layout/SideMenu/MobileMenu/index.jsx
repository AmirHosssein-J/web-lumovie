import S from "../sidemenu.module.scss";

import { useSelector } from "react-redux";

import Nav from "../Nav";
import Profile from "/src/components/Cards/Profile";

//Icons;
import IC_Home from "/src/assets/icon/IC_Home";
import IC_Movie from "/src/assets/icon/IC_Movie";
import IC_Series from "/src/assets/icon/IC_Series";
import IC_Actors from "/src/assets/icon/IC_Actors";
import IC_Cinema from "/src/assets/icon/IC_Cinema";
import IC_Upcomings from "/src/assets/icon/IC_Upcomings";
import IC_Bookmarks from "/src/assets/icon/IC_Bookmark";
import IC_Directors from "/src/assets/icon/IC_Directors";
import IC_Genres from "/src/assets/icon/IC_Genres";
import IC_Friends from "/src/assets/icon/IC_Friends";
import IC_Notification from "/src/assets/icon/IC_Notification";
import IC_Help from "/src/assets/icon/IC_Help";
import IC_DownloadOne from "/src/assets/icon/IC_DownloadOne";

const MobileMenu = () => {
  const navLists = [
    {
      title: "Category",
      links: [
        {
          text: "Home",
          icon: <IC_Home />,
          alt: "home icon",
          href: "./",
        },
        {
          text: "Movies",
          icon: <IC_Movie />,
          alt: "movies icon",
          href: "./movies",
        },
        {
          text: "Series",
          icon: <IC_Series />,
          alt: "series icon",
          href: "./series",
        },
        {
          text: "Genres",
          icon: <IC_Genres />,
          alt: "actors icon",
          href: "./genres",
        },
        {
          text: "Actors",
          icon: <IC_Actors />,
          alt: "actors icon",
          href: "./actors",
        },
        {
          text: "Directors",
          icon: <IC_Directors />,
          alt: "directors icon",
          href: "./directors",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          text: "Friends",
          icon: <IC_Friends />,
          alt: "friends icon",
          href: "./friends",
        },
        {
          text: "Notification",
          icon: <IC_Notification />,
          alt: "notification icon",
          href: "./notification",
        },
        {
          text: "Help",
          icon: <IC_Help />,
          alt: "help icon",
          href: "./help",
        },
      ],
    },
    {
      title: "General",
      links: [
        {
          text: "Cinema",
          icon: <IC_Cinema />,
          alt: "cinema icon",
          href: "./cinema",
        },
        {
          text: "Upcomings",
          icon: <IC_Upcomings />,
          alt: "upcomings icon",
          href: "./upcomings",
        },
        {
          text: "Bookmarks",
          icon: <IC_Bookmarks />,
          alt: "bookmarks icon",
          href: "./bookmarks",
        },
        {
          text: "Downloads",
          icon: <IC_DownloadOne />,
          alt: "downloads icon",
          href: "./downloads",
        },
      ],
    },
  ];

  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );

  return (
    <>
      <aside
        className={`${
          isMenuClosedMobile ? `${S["side-menu-mobile--open"]}` : ""
        } ${S["side-menu-mobile"]} ${S["side-menu"]}`}>
        <Profile isMobile />
        <Nav navLists={navLists} />
      </aside>
    </>
  );
};

export default MobileMenu;
