import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"
import { ArrowRightIcon } from "@/public/icons"
import Image from "next/image"


const Hero = () => {
  return (
    <section className="py-21">
      <div className="relative  bg-white/40 containers rounded-[50px] px-[68px] hero-box">
      <Image src={"/images/hero-bg.png"} alt="hero-bg" width={1481} height={742} className="absolute border -left-18 top-32 "/>
      <Navbar/>
      <div className="flex items-center justify-start gap-40 py-15">
        <div className="w-[332px] flex flex-col gap-4 items-start z-2">
          <h2 className="text-6xl tracking-wide font-black leading-23 uppercase">Вкусная еда ждет тебя!</h2>
          <Button className="cursor-pointer py-6! px-5! rounded-br-none ">Посмотреть меню <ArrowRightIcon/></Button>
        </div>
         <Image className="w-auto h-auto" src={"/images/hero-img.png"} alt="hero-img" width={613} height={609}/>
      </div>
      </div>
    </section>
  )
}

export default Hero