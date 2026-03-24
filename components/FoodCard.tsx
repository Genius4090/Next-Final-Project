"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { CartLightIcon, HeartIcon } from "@/public/icons"
import { ProductType } from "@/@types"
import { addCart } from "@/services"
import { getCookie } from "cookies-next"
import { toast } from "sonner"
import { Link } from "@/i18n/navigation"



const FoodCard = ({item}:{item:ProductType}) => {
const userId = getCookie("userId")
  
async function handleAddCart(id:number,){
     await addCart(Number(userId),id).then(res => toast.success("sucessfully added",{ position: "top-center" }))
}



  return (
    <div className="w-[263px] relative min-h-[310px] bg-white/40 rounded-[38px] flex flex-col items-center">
<Link href={`/menu/${item.id}`}>
<Image src={`https://anorkhulov.uz/${item.image}`} alt="card-image" width={243} height={253} style={{ width: 'auto', height: 'auto' }} className="-mt-20"/>

</Link>
      <div className=" w-full px-5  h-full flex flex-col justify-between pb-4">
       <div>
       <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="mt-2">{item.description}</p>
       </div>
          <p className="mt-4 font-bold text-2xl">{item.price}</p>
          <Button onClick={()=> handleAddCart(item.id)} className="cursor-pointer absolute right-8 bottom-7 p-4 rounded-sm scale-140" size={"icon"}><CartLightIcon/></Button>
          
        </div>
    </div>
  )
}

export default FoodCard