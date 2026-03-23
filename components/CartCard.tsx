
import Image from "next/image"
import { Button } from "./ui/button"
import { CartItem } from "@/@types"
import { Minus, Plus, X } from "lucide-react"


const CartFood = ({item}:{item:CartItem}) => {
  return (
   <>
    <div className="w-[560px] shadow-2xl border border-gray-300 relative h-[260px] py-4 bg-white/40 px-4 rounded-[38px] flex items-center">

    

<Image src={`https://anorkhulov.uz/${item.product.image}`} alt="card-image" width={243} height={253} className="w-auto h-auto border"/>


       

       
       <div className="flex flex-col items-start justify-between w-full h-full px-4 py-4">
       <div className="flex justify-between items-start w-full">
       <h3 className="text-2xl font-bold">{item.product.name}</h3>
       <Button className="py-0.5! px-2! rounded-full! cursor-pointer"><X  className="w-3.5!"/></Button>
       </div>
        <div className="flex w-full justify-between items-center">
        <div className="flex gap-4 items-center">
          
          <Button className="cursor-pointer  px-2!   rounded-sm" size={"icon"}><Minus/></Button>
          <h2 className="font-semibold">1</h2>
         <Button className="cursor-pointer  px-2!  rounded-sm" size={"icon"}><Plus/></Button>

         </div>
      <p className=" font-semibold bg-yellow-300 rounded px-2 text-lg">${item.product.price}</p>
        </div>

       </div>
          
       
     
    </div>
   </>
  )
}

export default CartFood