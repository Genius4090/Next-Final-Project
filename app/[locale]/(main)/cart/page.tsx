import { cookies } from "next/headers";
import CartContent from "./cartContent";
import { GetCart } from "@/services";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  
  if(!userId){
  redirect("/")
  }

  const cartList = await GetCart(userId);
 console.log(cartList);
 
  
  
  return userId ? <CartContent cartList={cartList.data.items} /> : "";
};

export default CartPage;
