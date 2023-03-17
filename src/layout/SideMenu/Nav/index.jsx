import { useState } from "react";
import styles from "./nav.module.scss";

import NavList from "./NavList";
import Download from "/src/components/Cards/Download/Download";

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

const Nav = () => {
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
    <nav className={styles["nav"]}>
      {navLists.map((navList, index) => {
        return (
          <NavList key={index} title={navList.title} links={navList.links} />
        );
      })}
      <Download />
    </nav>
  );
};

export default Nav;
