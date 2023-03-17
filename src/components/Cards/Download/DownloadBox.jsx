import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./download.module.scss";

import Wrapper from "../../HOC/Wrapper";
import Button from "../../Button";

import IC_DownloadOne from "../../../assets/icon/IC_DownloadOne";

const DownloadBox = () => {
  //
  const [downloadList, setDownloadList] = useState([
    // {
    //   title: "Friends",
    //   detail: { szn: "01", ep: "12" },
    //   status: 34,
    //   poster: "src/assets/poster/Friends.png",
    // },
  ]);

  return (
    <Wrapper className={styles["download"]}>
      <div className={styles["content"]}>
        {downloadList.length ? (
          <Wrapper className={styles["movie"]}>
            <div className={styles["info"]}>
              <img className={styles["poster"]} src={downloadList[0].poster} />

              <div className={styles["details"]}>
                <h5 className={styles["title"]}>{downloadList[0].title}</h5>
                {downloadList[0].detail && (
                  <h6 className={styles["detail"]}>
                    <span>S{downloadList[0].detail.szn}</span>
                    <span>EP{downloadList[0].detail.ep}</span>
                  </h6>
                )}
              </div>
            </div>

            <div className={styles["progress-bar"]}>
              <div
                className={styles["progress-bar--fill"]}
                style={{ width: `${downloadList[0].status}%` }}
              ></div>
            </div>
          </Wrapper>
        ) : (
          <>
            <IC_DownloadOne />
            <h6 className={styles["download-title"]}>List of your downloads</h6>
          </>
        )}
      </div>

      <Link to="./downloads">
        <Button.CTA text={"Full List"} />
      </Link>
    </Wrapper>
  );
};

export default DownloadBox;
