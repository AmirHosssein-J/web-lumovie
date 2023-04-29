import Section from "../../section";
export default function Musician({ credits }) {
  const musician = credits.crew.filter(
    (composer) => composer.job === "Original Music Composer"
  );
  return (
    <>
      {musician.length > 0 && (
        <Section title={"Music by"} links={musician} category="composer" />
      )}
    </>
  );
}
