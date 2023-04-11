import S from "./serie.module.scss";

import Wrapper from "../../HOC/Wrapper";

const Serie = ({ poster, title, ep, szn, whatsNew, href }) => {
  return (
    <Wrapper className={S["series"]}>
      <a className={S["poster"]} href={href}>
        <img className={S["img"]} src={poster} />
      </a>
      <div className={S["info"]}>
        <a className={S["title"]} href={href}>
          {title}
        </a>
        <div className={S["details"]}>
          <h6 className={S["ep"]}>
            {szn && `S${szn}`} {ep && `Ep${ep}`}
          </h6>
          <h5 className={S["whats-new"]}>{whatsNew}</h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default Serie;
