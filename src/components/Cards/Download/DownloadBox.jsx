import S from "./download.module.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../HOC/Wrapper";
import Button from "../../Button";

import IC_DownloadOne from "/src/assets/icon/IC_DownloadOne";

const DownloadBox = () => {
  
  const [downloadList, setDownloadList] = useState([
    // {
    //   title: "Friends",
    //   detail: { szn: "01", ep: "12" },
    //   status: 34,
    //   poster: "",
    // },
  ]);

  return (
    <Wrapper className={S["download"]}>
      <div className={S["content"]}>
        {downloadList.length ? (
          <Wrapper className={S["movie"]}>
            <div className={S["info"]}>
              <img className={S["poster"]} src={downloadList[0].poster} />

              <div className={S["details"]}>
                <h5 className={S["title"]}>{downloadList[0].title}</h5>
                {downloadList[0].detail && (
                  <h6 className={S["detail"]}>
                    <span>S{downloadList[0].detail.szn}</span>
                    <span>EP{downloadList[0].detail.ep}</span>
                  </h6>
                )}
              </div>
            </div>

            <div className={S["progress-bar"]}>
              <div
                className={S["progress-bar--fill"]}
                style={{ width: `${downloadList[0].status}%` }}
              ></div>
            </div>
          </Wrapper>
        ) : (
          <>
            <IC_DownloadOne />
            <h6 className={S["download-title"]}>List of your downloads</h6>
          </>
        )}
      </div>

      <Link to="./downloads">
        <Button.CTA text="Full List"/>
      </Link>
    </Wrapper>
  );
};

export default DownloadBox;
