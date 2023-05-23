export default function useTitle(name) {
  return name
    .replace(/[!.:'/]/g, "")
    .split(" ")
    .join("-")
    .toString()
    .toLowerCase();
}
