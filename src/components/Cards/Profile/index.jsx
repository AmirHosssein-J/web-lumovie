import S from "./profile.module.scss";

import { useSelector } from "react-redux";
import { useState } from "react";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";
import Container from "../../HOC/Container";
import Dropdown from "../Dropdown";

import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";
import IC_Settings from "/src/assets/icon/IC_Settings";
import IC_Profile from "/src/assets/icon/IC_Profile";
import IC_Logout from "/src/assets/icon/IC_Logout";

const Profile = ({ isMobile }) => {
  const [links, setLinks] = useState([
    { title: "Settings", icon: <IC_Settings /> },
    { title: "Profile", icon: <IC_Profile /> },
    { title: "Logout", icon: <IC_Logout /> },
  ]);

  const user = useSelector((state) => state.user);

  return (
    <Container
      className={`
        ${S["container"]}
        ${isMobile ? `${S["container--mobile"]}` : ""} 
      `}
    >
      <Wrapper className={S["profile"]}>
        <div className={S["user"]}>
          <img
            className={S["user-pic"]}
            src={user.img}
            alt={`${user.name} profile image`}
          />
          <h5 className={S["user-name"]}>{user.name}</h5>
        </div>
        <Button.Icon
          icon={<IC_ArrowSM />}
          dimension={2}
          className={S["arrow-button"]}
        />
        <Dropdown links={links} className={S["dropdown"]} />
      </Wrapper>
    </Container>
  );
};

export default Profile;
