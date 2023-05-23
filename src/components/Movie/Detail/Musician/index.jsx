import Section from "../../Section";
const Musician = ({ crew }) => {
  const musician = crew.filter(
    (composer) => composer.job === "Original Music Composer"
  );
  return (
    <>
      {musician.length > 0 && (
        <Section title="Music by" links={musician} category="composer" />
      )}
    </>
  );
};

export default Musician;
