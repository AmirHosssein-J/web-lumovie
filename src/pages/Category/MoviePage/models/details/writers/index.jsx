import Section from "../../section";
export default function Writers({ credits }) {
  const writers = credits.crew.filter((writer) => writer.job === "Screenplay");
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
}
