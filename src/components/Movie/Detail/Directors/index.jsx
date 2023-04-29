import Section from "../../Section";

const Directors = ({ crew }) => {
  const directors = crew.filter((director) => director.job === "Director");
  return (
    <Section
      title={directors.length < 2 ? "Director" : "Directors"}
      links={directors}
      category="director"
    />
  );
};

export default Directors;
