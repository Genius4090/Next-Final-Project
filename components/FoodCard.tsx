
import Image from "next/image"
import { Button } from "./ui/button"
import { CartLightIcon, HeartIcon } from "@/public/icons"
import { ProductType } from "@/@types"


const FoodCard = ({item}:{item:ProductType}) => {
  return (
    <div className="w-[263px] relative h-[310px] bg-white/40 rounded-[38px] flex flex-col items-center">
      <Image src={`https://anorkhulov.uz/${item.image}`} alt="card-image" width={243} height={253} className="w-auto h-auto -mt-20"/>
      <div className=" w-full px-5  h-full flex flex-col justify-between pb-4">
       <div>
       <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="mt-2">Spicy with Garlic</p>
       </div>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-8 bottom-7 p-4 rounded-sm scale-140" size={"icon"}><CartLightIcon/></Button>
        </div>
    </div>
  )
}

export default FoodCard