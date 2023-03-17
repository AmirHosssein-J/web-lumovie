import { useState } from "react";

import styles from "./profile.module.scss";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";
import Container from "../../HOC/Container";
import Dropdown from "../Dropdown";

import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";
import IC_Settings from "/src/assets/icon/IC_Settings";
import IC_Profile from "/src/assets/icon/IC_Profile";
import IC_Logout from "/src/assets/icon/IC_Logout";

const Profile = ({ profilePic, name }) => {
  const [links, setLinks] = useState([
    { title: "Settings", icon: <IC_Settings /> },
    { title: "Profile", icon: <IC_Profile /> },
    {
      title: "Logout",
      icon: <IC_Logout />,
      href: "https://www.lumovie.ir/login",
    },
  ]);

  return (
    <Container className={`${styles["container"]}`}>
      <Wrapper className={`${styles["profile"]}`}>
        <div className={`${styles["user"]}`}>
          <img
            className={`${styles["user-pic"]}`}
            src={profilePic}
            alt={`${name} profile image`}
          />
          <h5 className={`${styles["user-name"]}`}>{name}</h5>
        </div>
        <Button.Icon
          icon={<IC_ArrowSM />}
          width={2}
          height={2}
          rounded={100}
          className={`${styles["arrow-button"]}`}
        />
        <Dropdown links={links} className={`${styles["dropdown"]}`} />
      </Wrapper>
    </Container>
  );
};

export default Profile;
