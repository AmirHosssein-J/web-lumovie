import axios from "axios";

export default async function useFetch(api) {
  const { data } = await axios.get(api);
  return data;
}
