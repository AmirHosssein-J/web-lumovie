import S from "../modal.module.scss";

const Youtube = ({ pathKey }) => {
  return (
    <iframe
      className={S["youtube"]}
      src={`https://www.youtube.com/embed/${pathKey}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Youtube;
