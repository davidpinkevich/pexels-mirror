import ky from "ky";
import { API_KEY, BASE_URL } from "utils/constants";

export const api = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});
