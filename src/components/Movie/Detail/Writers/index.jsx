import Section from "../../Section";

const Directors = ({ crew }) => {
  const writers = crew.filter((writer) => writer.job === "Screenplay");
  return (
    <>
      {writers.length > 0 && (
        <Section
          title={writers.length < 2 ? "Writer" : "Writers"}
          links={writers}
          category="writer"
        />
      )}
    </>
  );
};

export default Directors;
