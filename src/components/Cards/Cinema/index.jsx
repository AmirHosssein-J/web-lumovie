import S from "./cinema.module.scss";

import Wrapper from "../../HOC/Wrapper";
import Button from "../../Button";
import SectionHeader from "../SectionHeader";

import IC_Friends from "/src/assets/icon/IC_Friends";
import IC_FriendsPH from "/src/assets/icon/IC_FriendsPH";

const Cinema = ({ isPlaceholder }) => {
  return (
    <Wrapper
      className={`
      ${S["cinema"]}
      ${isPlaceholder ? S["cinema--placeholder"] : S["cinema--include-content"]}
    `}
    >
      {isPlaceholder ? (
        <SectionHeader title="Cinema" />
      ) : (
        <SectionHeader title="Cinema" arrows seemore="See More" />
      )}
      {isPlaceholder && (
        <div className={S["content"]}>
          <div className={S["head"]}>
            <IC_Friends className={S["icon"]} />
            <h5 className={S["title"]}>Currently no available sessions</h5>
          </div>
          <Button.CTA
            onClick={() => alert("Feature in Progress, Kappa!")}
            text="Add Friend"
            href="./friends"
          />
          <h5>or</h5>
          <Button.Link
            text="Start a session"
            href="./start-session"
            underline
            onClick={() => alert("Feature in Progress, Kappa!")}
          />
        </div>
      )}
      <IC_FriendsPH className={S["icon-placeholder"]} />
    </Wrapper>
  );
};

export default Cinema;
