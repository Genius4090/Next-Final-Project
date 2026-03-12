import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRightIcon, CartLightIcon, HeartIcon } from "@/public/icons"
import Image from "next/image"

const Popular = () => {
  return (
  <div className="popular-box py-10">
      <div className="containers ">
      <h2 className="font-bold text-5xl text-center">Популярные блюда</h2>
        <Carousel className="py-20 ">
  <CarouselContent className="">
    <CarouselItem  className="basis-1/4">
      <div className=" w-[263px] ">
       <div className="relative h-18 flex items-center justify-center z-4 ">
       <Image className="w-auto h-auto top-0 absolute" src={"/images/popular-img.png"} alt="popular-img" width={224} height={217}/>
       </div>
        <div className="bg-white/40 relative pt-40 px-4 flex flex-col p-5 gap-2 items-start justify-end rounded-[38px]">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="">Spicy with Garlic</p>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-5 p-5 rounded-sm" size={"icon"}><CartLightIcon/></Button>
        </div>

      </div>
    </CarouselItem>
    <CarouselItem  className="basis-1/4">
      <div className=" w-[263px] ">
       <div className="relative h-18 flex items-center justify-center z-4 ">
       <Image className="w-auto h-auto top-0 absolute" src={"/images/popular-img.png"} alt="popular-img" width={224} height={217}/>
       </div>
        <div className="bg-white/40 relative pt-40 px-4 flex flex-col p-5 gap-2 items-start justify-end rounded-[38px]">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="">Spicy with Garlic</p>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-5 p-5 rounded-sm" size={"icon"}><CartLightIcon/></Button>
        </div>

      </div>
    </CarouselItem>
  
    <CarouselItem  className="basis-1/4">
      <div className=" w-[263px] ">
       <div className="relative h-18 flex items-center justify-center z-4 ">
       <Image className="w-auto h-auto top-0 absolute" src={"/images/popular-img.png"} alt="popular-img" width={224} height={217}/>
       </div>
        <div className="bg-white/40 relative pt-40 px-4 flex flex-col p-5 gap-2 items-start justify-end rounded-[38px]">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="">Spicy with Garlic</p>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-5 p-5 rounded-sm" size={"icon"}><CartLightIcon/></Button>
        </div>

      </div>
    </CarouselItem>

    <CarouselItem  className="basis-1/4">
      <div className=" w-[263px] ">
       <div className="relative h-18 flex items-center justify-center z-4 ">
       <Image className="w-auto h-auto top-0 absolute" src={"/images/popular-img.png"} alt="popular-img" width={224} height={217}/>
       </div>
        <div className="bg-white/40 relative pt-40 px-4 flex flex-col p-5 gap-2 items-start justify-end rounded-[38px]">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="">Spicy with Garlic</p>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-5 p-5 rounded-sm" size={"icon"}><CartLightIcon/></Button>
        </div>

      </div>
    </CarouselItem>
    <CarouselItem  className="basis-1/4">
      <div className=" w-[263px] ">
       <div className="relative h-18 flex items-center justify-center z-4 ">
       <Image className="w-auto h-auto top-0 absolute" src={"/images/popular-img.png"} alt="popular-img" width={224} height={217}/>
       </div>
        <div className="bg-white/40 relative pt-40 px-4 flex flex-col p-5 gap-2 items-start justify-end rounded-[38px]">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold">Chicken soup</h3>
            <Button size={"icon"} className="cursor-pointer bg-transparent mt-0.5"><HeartIcon/></Button>
          </div>
          <p className="">Spicy with Garlic</p>
          <p className="mt-4 font-bold text-2xl">$10.00</p>
          <Button className="cursor-pointer absolute right-5 p-5 rounded-sm" size={"icon"}><CartLightIcon/></Button>
        </div>

      </div>
    </CarouselItem>
    
  
  </CarouselContent>
  
  <CarouselPrevious />
  <CarouselNext/>
</Carousel> 
<div className="w-full flex justify-end">
<Button className="cursor-pointer py-6! px-5! rounded-br-none ">Посмотреть меню <ArrowRightIcon/></Button>
</div>
    </div>
  </div>
  )
}

export default Popular

