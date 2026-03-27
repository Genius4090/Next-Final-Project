"use server"
import { ContactType, ProductType } from "@/@types"
import instance from "@/hooks/instance"
import { revalidatePath } from "next/cache"
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
    return { err: true,  message: err.message || "Unknown error" };
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
      console.error("Failed to fetch data:", err);
    }
  }

  export const GetById = async (id:number) => {
    try{
      const res = await instance().get(`/products/${id}`)
    return res.data.data
    }catch(err){
      console.log(err);
    }
  }

  export const GetCart = async (id:any) => {
    const res = await instance().get("/cart/current",{
      params:{
        userId: id
      }
    })
    return res.data
  }


  export const addCart = async (userId:number,productId:number) => {
    const res = await instance().post(`/cart/items`,
      {
        productId: productId,
        userId: userId,
        quantity: 1
      }
    )
    return res
}


export const DeleteCart = async (itemId:number) => {
  const res = await instance().delete(`/cart/items/${itemId}`)
  revalidatePath("/cart");
  return res
  // const res = await fetch(`https://anorkhulov.uz/api/cart/items/${itemId}`, {
  // method:"DELETE"})
  // revalidatePath("/cart");
  // return res
}


export const AddReservation = async (data:any) => {
  const res = await instance().post("/reservations/create",data)
  return res
}



export const SendContact = async (data:ContactType) => {
 await instance().post("/contact",data)
}



export const getReservations = async (token:string | undefined,userId: number) => {
  try{
  const res =  await instance(token).get("/reservations", {
      params: {userId:userId}
      });
  return res.data.data
  }catch(err){
    console.log(err);
    
  } 
};



export const getContact = async (token:string | undefined,userId: number) => {
  try{
  const res =  await instance(token).get("/contact", {
      params: {userId:userId}
      });
  return res.data.data
  }catch(err){
    console.log(err);
    
  } // ✅ 
};





export const addProduct = async (data:any,token:any) => {
  const res = await instance(token).post(`/products`,data).then(res => {
    revalidatePath("/admin/menu")
    
    })
    return res
}



export const updateProduct = async (data:any,token:any,id:number) => {
  const res = await instance(token).patch(`/products/${id}`,data)
  return res.data
}
