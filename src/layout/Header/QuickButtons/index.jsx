import { useState } from "react";

import S from "../header.module.scss";
import Button from "/src/components/Button";

import IC_Friends from "/src/assets/icon/IC_Friends";
import IC_Notification from "/src/assets/icon/IC_Notification";
import IC_Help from "/src/assets/icon/IC_Help";

const QuickButtons = () => {
  const [notifs, setNotifs] = useState([{}, {}]);
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

  return (
    <div className={`${S["buttons"]}`}>
      {buttons.map((button, index) => {
        return (
          <Button.Icon
            key={index}
            className={`${S["button"]}`}
            icon={button.icon}
            dimension={3.25}
            tooltip={button.tooltip}
            alert={button.alert}
          />
        );
      })}
    </div>
  );
};

export default QuickButtons;
