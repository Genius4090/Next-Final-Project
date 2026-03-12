import { Button } from "@/components/ui/button"
import { CartIcon, LikedIcon } from "@/public/icons"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10">
        <Image className="w-auto h-auto" src={"/images/websiteLogo.svg"} alt="website-logo" width={136} height={71}/>
        <ul className="flex items-center gap-11">
            <li className="text-lg cursor-pointer">Меню</li>
            <li className="text-lg cursor-pointer">Новости</li>
            <li className="text-lg cursor-pointer">Бронирование</li>
            <li className="text-lg cursor-pointer">О нас</li>
            <li className="text-lg cursor-pointer">Контакты</li>
        </ul>
        <div className="flex gap-5">
            <Button size={"icon"} className="cursor-pointer rounded-full bg-transparent border-2 border-black pt-0.5"><LikedIcon/></Button>
            <Button size={"icon"} className="cursor-pointer relative rounded-full bg-transparent border-2 border-black pt-0.5"><CartIcon/> <div className="absolute -top-1 -right-1.5 bg-[#FF0000] w-3.5 h-3.5 rounded-full text-[10px]"><p className="pt-[0.5px] pl-px">1</p></div></Button>
        </div>
    </div>
  )
}

export default Navbar