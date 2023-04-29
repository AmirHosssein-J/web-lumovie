import S from "../../models.module.scss";
import Cast from "../cast";
import Directors from "../directors";
import Musician from "../musician";
import Writers from "../writers";

import Wrapper from "/src/components/HOC/Wrapper";

const Crew = ({ crew }) => {
  return (
    <Wrapper className={S["crew"]}>
      <Cast credits={crew} />
      <Directors credits={crew} />
      <Writers credits={crew} />
      <Musician credits={crew} />
    </Wrapper>
  );
};

export default Crew;
