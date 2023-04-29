import Section from "../../../models/section";
export default function Cast({ credits }) {
  const stars = credits.cast.slice(0, 5);
  return <Section title={"Stars"} links={stars} category="actor" />;
}
