
import Image from "next/image"
import { Button } from "./ui/button"
import { CartLightIcon, HeartIcon } from "@/public/icons"
import { ProductType } from "@/@types"
import { addCart } from "@/services"
import { toast } from "sonner"


const FoodCard = ({item}:{item:ProductType}) => {
  
//  async function handleAddCart() {
//    const data = {
//     quantity: 1,
//     note: null,
//     unitPrice: 10,
//     totalPrice: 10,
//     product: {
//         id: item.id,
//         "name": item.name,
//         "image": item.image,
//         "price": item.price,
//         "isAvailable": item.isAvailable
//     }
// }
//     const res = await addCart(data).then(res => toast.success("added sucessfully"))
//   }
  return (
    <div className="w-[263px] relative min-h-[310px] bg-white/40 rounded-[38px] flex flex-col items-center">
      <Image src={`https://anorkhulov.uz/${item.image}`} alt="card-image" width={243} height={253} className="w-auto h-auto -mt-20"/>
      <div className=" w-full px-5  h-full flex flex-col justify-between pb-4">
       <div>
       <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="mt-2">{item.description}</p>
       </div>
          <p className="mt-4 font-bold text-2xl">{item.price}</p>
          <Button className="cursor-pointer absolute right-8 bottom-7 p-4 rounded-sm scale-140" size={"icon"}><CartLightIcon/></Button>
          {/* onClick={()=> handleAddCart(item.id)} */}
        </div>
    </div>
  )
}

export default FoodCard