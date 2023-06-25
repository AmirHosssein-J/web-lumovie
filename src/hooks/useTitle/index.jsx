export default function useTitle(name) {
  return name
    .replace(/[!.:'/]/g, "")
    .split(" ")
    .join("-")
    .toString()
    .toLowerCase();
}

// Shazam! Fury of the Gods
// to
// shazam-fury-of-the-gods
