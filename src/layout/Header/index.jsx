import { useState, useEffect, useSyncExternalStore } from "react";

import useWindowSize from "/src/hooks/useWindowSize";

import styles from "./header.module.scss";

import Profile from "/src/components/Cards/Profile";
import Button from "/src/components/Button";
import Search from "/src/components/Inputs/Search";

import ProfilePic from "/src/assets/icon/ProfilePic.png";
import IC_Friends from "/src/assets/icon/IC_Friends";
import IC_Notification from "/src/assets/icon/IC_Notification";
import IC_Help from "/src/assets/icon/IC_Help";

const Header = () => {
  //represent data came from server
  const [notifs, setNotifs] = useState([{}, {}, {}]);
  const [friendsOnline, setFriendsOnline] = useState([{}, {}, {}, {}]);

  const [buttons, setButtons] = useState([
    {
      icon: <IC_Friends />,
      tooltip: "Friends",
      alert: friendsOnline.length,
    },
    {
      icon: <IC_Notification />,
      tooltip: "Notification",
      alert: notifs.length,
    },
    { icon: <IC_Help />, tooltip: "Help" },
  ]);

  const [user, setUser] = useState({
    name: "MrRadikal",
    img: ProfilePic,
  });

  const { width } = useWindowSize();

  console.log("render");

  return (
    <header className={`${styles["header"]}`}>
      {width >= 991 && <Profile name={user.name} profilePic={user.img} />}

      <Search />

      {width >= 991 ? (
        <div className={`${styles["buttons"]}`}>
          {buttons.map((button, index) => {
            return (
              <Button.Icon
                key={index}
                className={`${styles["button"]}`}
                icon={button.icon}
                height={3.25}
                width={3.25}
                rounded={100}
                tooltip={button.tooltip}
                alert={button.alert}
              />
            );
          })}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
