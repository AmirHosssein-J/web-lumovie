import S from "./download.module.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DownloadBox from "./DownloadBox";
import Button from "../../Button";

import IC_DownloadOne from "/src/assets/icon/IC_DownloadOne";

const Download = () => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);

  return (
    <>
      {!isMenuClosed ? (
        <DownloadBox />
      ) : (
        <Link to="./downloads" className={S["download-button"]}>
          <Button.Icon border dimension={2.625} icon={<IC_DownloadOne />} />
        </Link>
      )}
    </>
  );
};

export default Download;
