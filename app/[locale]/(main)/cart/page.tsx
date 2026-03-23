import CartContent from "./cartContent"
import { GetCart } from "@/services"

const CartPage = async () => {
   
  
  const cartList = await GetCart(1) 
  console.log(cartList.data);
  
  return <CartContent cartList={cartList.data.items}/>
}

export default CartPage