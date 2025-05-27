import ky from "ky";
import { BASE_URL, REQUEST_TIMEOUT } from "../consts";

export const BASE_API = ky.create({
  prefixUrl: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  hooks: {
    beforeRequest: [
      (request) => {
        console.log(`Request: ${request.url}`);
      },
    ],
  },
});
