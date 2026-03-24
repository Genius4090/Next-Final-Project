"use client"
import { ProductType } from "@/@types"
import { Button } from "@/components/ui/button"
import WrapperBox from "@/components/WrapperBox"
import { Navbar, Popular  } from "@/modules"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const ProductByIdContent = ({singleProduct,popularProducts }:{singleProduct:ProductType,popularProducts:ProductType[]}) => {
    const [productCount,setProductCount] = useState<number>(1)
    
  return (
    <div className="py-21">
    <WrapperBox>
    <Navbar/>
   <div className="flex py-40 justify-center  ">
   <div className="flex justify-center items-center  gap-10 ">
       
       <Image src={`https://anorkhulov.uz/${singleProduct.image}`} alt="moreproductimg" width={719} height={400} style={{ width: 'auto', height: 'auto' }}/>
        <div className="flex flex-col gap-3 w-[591px]">
    <h2 className="font-bold text-[40px]">{singleProduct.name}</h2>
    <div className="flex items-center gap-12">
        <p  className="font-bold text-3xl">{singleProduct.price}$</p>
       <span className="flex gap-3 items-center">
       <h4 className="text-2xl font-semibold">rating : {singleProduct.rating} </h4>
       <p className="text-[#6D6D6D] text-2xl cursor-pointer">(Смотреть отзывы)</p>
       </span>
    </div>
    <h4 className="font-bold text-3xl mt-4">Описание</h4>
    <p className="py-2 text-2xl">{singleProduct.description} Эти двусторонние шелковые брюки с запахом икат сочетают в себе универсальность двух потрясающих рисунков ткани. Эти брюки, изготовленные из очаровательной ткани икат, позволяют вам выбрать предпочтительный узор, что делает их универсальным дополнением к вашему гардеробу.</p>


    <div className="flex gap-6 items-center mt-4">

   <div className="flex gap-4 items-center justify-center py-2 rounded-[15px] bg-white/40 px-2">
      
      <Button disabled={productCount <= 1} onClick={()=> setProductCount((prev) => prev - 1)}  className="cursor-pointer  px-2!   rounded-sm bg-transparent text-black" size={"icon"}><Minus/></Button>
      <h2 className="font-semibold select-none">{productCount}</h2>
     <Button onClick={()=> setProductCount((prev) => prev + 1)}  className="cursor-pointer  px-2!  rounded-sm bg-transparent text-black" size={"icon"}><Plus/></Button>

     </div>

     <Button className="cursor-pointer py-6! px-9!"> В Корзину</Button>


   </div>

        </div>
 
</div>
   </div>
    </WrapperBox>
     <div className="containers">
      <h4 className="font-bold text-[40px]">Похожие:</h4>
       <Popular popularProducts={popularProducts}/>
     </div>
</div>
  )
}

export default ProductByIdContent