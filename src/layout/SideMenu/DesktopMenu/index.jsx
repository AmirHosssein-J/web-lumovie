import S from "../sidemenu.module.scss";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceSideMenu";

import Button from "/src/components/Button";

import Download from "/src/components/Cards/Download/Download";
import Logo from "/src/components/Logo";
import Nav from "../Nav";

//Icons;
import IC_Home from "/src/assets/icon/IC_Home";
import IC_Movie from "/src/assets/icon/IC_Movie";
import IC_Series from "/src/assets/icon/IC_Series";
import IC_Anime from "/src/assets/icon/IC_Anime";
import IC_Animation from "/src/assets/icon/IC_Animation";
import IC_Actors from "/src/assets/icon/IC_Actors";
import IC_Cinema from "/src/assets/icon/IC_Cinema";
import IC_Upcomings from "/src/assets/icon/IC_Upcomings";
import IC_Bookmarks from "/src/assets/icon/IC_Bookmark";
import IC_Directors from "/src/assets/icon/IC_Directors";
import IC_Genres from "/src/assets/icon/IC_Genres";

const DesktopMenu = () => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);
  const dispatch = useDispatch();

  const [navLists, setNavLists] = useState([
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
          text: "Animes",
          icon: <IC_Anime />,
          alt: "anime icon",
          href: "./animes",
        },
        {
          text: "Animations",
          icon: <IC_Animation />,
          alt: "animation icon",
          href: "./animations",
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
      ],
    },
  ]);

  return (
    <>
      <aside
        className={`${isMenuClosed ? `${S["side-menu--closed"]}` : ""} ${
          S["side-menu"]
        }`}
      >
        <Button.Arrow
          className={
            !isMenuClosed
              ? `${S["menu-toggle"]}`
              : `${S["menu-toggle"]} ${S["menu-toggle--closed"]}`
          }
          onClick={() => {
            dispatch(toggle(!isMenuClosed));
          }}
        />
        <Logo noLogoText={isMenuClosed} />
        <Nav navLists={navLists} isMenuClosed={isMenuClosed} />
        <Download />
      </aside>
    </>
  );
};

export default DesktopMenu;
