
import { ProductType } from "@/@types"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from "@/i18n/navigation"
import { ArrowRightIcon, CartLightIcon, HeartIcon } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"





const Popular = ({popularProducts} : {popularProducts : ProductType[]}) => {
 
  
  const t = useTranslations()
  return (
  <div className="popular-box py-10">
      <div className="containers ">
      <h2 className="font-bold text-5xl text-center">{t("PopularPage.title")}</h2>
        <Carousel className="py-15">
  <CarouselContent className="py-15">
    {popularProducts?.slice(0,6).map(item => 
<CarouselItem key={item.id}  className="basis-1/4 flex items-center justify-center">
<div className="w-[263px] relative min-h-[310px] bg-white/40 rounded-[38px] flex flex-col items-center">
<Link href={`/menu/${item.id}`}>
<Image src={ item.image ? `https://anorkhulov.uz/${item.image}` : "/images/popular-img.png"} alt="card-image" width={243} height={253} className="-mt-18" style={{ width: 'auto', height: 'auto' }}/>
</Link>
      <div className=" w-full px-5  h-full flex flex-col justify-between pb-4">
       <div>
       <div className="w-full flex justify-between items-center ">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="mt-2">Spicy with Garlic</p>
       </div>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-8 bottom-7 p-4 rounded-sm scale-140" size={"icon"}><CartLightIcon/></Button>
        </div>
    </div>
</CarouselItem>
    )}
    
  
    
  
  </CarouselContent>
  
  <CarouselPrevious />
  <CarouselNext/>
</Carousel> 
<div className="w-full flex justify-end">
<Button className="cursor-pointer py-6! px-5! rounded-br-none ">{t("PopularPage.btn")}<ArrowRightIcon/></Button>
</div>
    </div>
  </div>
  )
}

export default Popular

