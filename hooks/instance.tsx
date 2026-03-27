// hooks/instance.ts
import axios from "axios";
import { CookieValueTypes } from "cookies-next";

const URL = process.env.NEXT_PUBLIC_API;

const instance = (token?: CookieValueTypes | Promise<CookieValueTypes>) => {
  return axios.create({
    baseURL: URL,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });
};

export default instance;