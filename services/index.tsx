import instance from "@/hooks/instance"
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


export const RegisterFn = async (data: RegisterType) => {
  try {
    const res = await instance().post("/auth/signup", data);
    return { success: true, data: res.data };
  } catch (err: any) {
    console.log(err);
  }
};


  export const LoginFn = async (data:LoginType) => {
    try {
      const res = await instance().post("/auth/signin", data);

      
      return res.data
    } catch (err) {

      console.error("Login failed:", err);
    }
  }




  export const GetAllFn = async (URL:string) => {
    try {
      const res = await instance().get(URL)
      return res.data.data
    } catch (err) {
      console.error("Login failed:", err);
    }
  }