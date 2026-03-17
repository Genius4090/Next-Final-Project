import instance from "@/hooks/instance"
import { setCookie } from "cookies-next"

interface RegisterType {
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
}

interface LoginType {
    username: string
    password: string
}


export const RegisterFn = async (data:RegisterType) => {
    try {
      const res = await instance().post("/auth/signup", data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error("Register failed:", err);
    }
  }


  export const LoginFn = async (data:LoginType) => {
    try {
      const res = await instance().post("/auth/signin", data);
      setCookie("token", res.data.accessToken);
      return res.data;
    } catch (err) {
      console.error("Login failed:", err);
    }
  }




  export const GetAllFn = async (URL:string) => {
    try {
      const res = await instance().get(URL)
      console.log(res.data.data);
      return res.data.data
    } catch (err) {
      console.error("Login failed:", err);
    }
  }