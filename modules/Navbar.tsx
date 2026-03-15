"use client"
import { Button } from "@/components/ui/button"
import { CartIcon, LikedIcon } from "@/public/icons"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <div className="flex items-center justify-between py-10 px-[68px]">
        <Link href={"/"}><Image className="w-auto h-auto" src={"/images/websiteLogo.svg"} alt="website-logo" width={136} height={71}/></Link>
        <ul className="flex items-center gap-11">
            <Link href={"/menu"} className={`text-lg cursor-pointer ${pathname == "/menu" ? "text-red-500" : "text-black"}`}>Меню</Link>
            <Link href={"/news"} className={`text-lg cursor-pointer ${pathname == "/news" ? "text-red-500" : "text-black"}`}>Новости</Link>
            <Link href={"/order"} className={`text-lg cursor-pointer ${pathname == "/order" ? "text-red-500" : "text-black"}`}>Бронирование</Link>
            <Link href={"/about"} className={`text-lg cursor-pointer ${pathname == "/about" ? "text-red-500" : "text-black"}`}>О нас</Link>
            <Link href={"/contact"} className={`text-lg cursor-pointer ${pathname == "/contact" ? "text-red-500" : "text-black"}`}>Контакты</Link>
        </ul>
        <div className="flex gap-5">
            <Button size={"icon"} className="cursor-pointer rounded-full bg-transparent border-2 border-black pt-0.5"><LikedIcon/></Button>
            <Button size={"icon"} className="cursor-pointer relative rounded-full bg-transparent border-2 border-black pt-0.5"><CartIcon/> <div className="absolute -top-1 -right-1.5 bg-[#FF0000] w-3.5 h-3.5 rounded-full text-[10px]"><p className="pt-[0.5px] pl-px">1</p></div></Button>
        </div>
    </div>
  )
}

export default Navbar