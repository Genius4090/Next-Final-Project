import axios from "axios";
import { getCookie } from "cookies-next";

const URL = process.env.NEXT_PUBLIC_API;
 
const instance = () => {
  const token = getCookie("token");
  return axios.create({
  baseURL: URL,
  headers: token ? {
    Authorization : `Bearer ${token}`
  } : {}

})
}

export default instance;