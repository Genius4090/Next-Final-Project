// hooks/instance.ts
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API;

const instance = (token?: string) => {
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