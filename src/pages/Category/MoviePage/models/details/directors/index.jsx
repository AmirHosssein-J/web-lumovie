import Section from "../../section";
export default function Directors({ credits }) {
  const directors = credits.crew.filter(
    (director) => director.job === "Director"
  );
  return (
    <Section
      title={directors.length < 2 ? "Director" : "Directors"}
      links={directors}
      category="director"
    />
  );
}
