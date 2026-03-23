"use client"
import { Button } from "@/components/ui/button"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { CartIcon, LikedIcon } from "@/public/icons"
import { GetCart } from "@/services"
import { getCookie, setCookie } from "cookies-next"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"

const Navbar = () => {
  const router = useRouter()
  const user = getCookie("userInfo")
  const token = getCookie("token")
  const [cartCount,setCartCount] = useState<number>(0)
  const [userId, setUserId] = useState<number | null>(() => {
    if (!user) return null
    try {
      return JSON.parse(user as string).id
    } catch {
      return null
    }
  })
   
   
   useEffect(()=>{
    const fetchCart = async () => {
     if(userId){
      const data = await GetCart(userId)
      setCartCount(data.data.itemCount)
      setCookie("cart",JSON.stringify(data.data))
     }
    }
    fetchCart()
  },[])

  const pathname = usePathname()
  const t = useTranslations()
  return (
    <div className="flex items-center justify-between py-10 px-[68px]">
        <Link href={"/"}><Image className="w-auto h-auto" src={"/images/websiteLogo.svg"} alt="website-logo" width={136} height={71}/></Link>
        <ul className="flex items-center gap-11">
            <Link href={"/menu"} className={`text-lg cursor-pointer ${pathname == "/menu" ? "text-red-500" : "text-black"}`}>{t("Navbar.link1")}</Link>
            <Link href={"/news"} className={`text-lg cursor-pointer ${pathname == "/news" ? "text-red-500" : "text-black"}`}>{t("Navbar.link2")}</Link>
            <Link href={"/order"} className={`text-lg cursor-pointer ${pathname == "/order" ? "text-red-500" : "text-black"}`}>{t("Navbar.link3")}</Link>
            <Link href={"/about"} className={`text-lg cursor-pointer ${pathname == "/about" ? "text-red-500" : "text-black"}`}>{t("Navbar.link4")}</Link>
            <Link href={"/contact"} className={`text-lg cursor-pointer ${pathname == "/contact" ? "text-red-500" : "text-black"}`}>{t("Navbar.link5")}</Link>
        </ul>
        <div className="flex gap-5">
            <Button size={"icon"} className="cursor-pointer rounded-full bg-transparent border-2 border-black pt-0.5"><LikedIcon/></Button>
            <Button onClick={()=> router.push(`${token ? "/cart" :"/login"}`)} size={"icon"} className="cursor-pointer relative rounded-full bg-transparent border-2 border-black pt-0.5"><CartIcon/> <div className="absolute -top-1 -right-1.5 bg-[#FF0000] w-3.5 h-3.5 rounded-full text-[10px]"><p className="pt-[0.5px] pl-px">{cartCount}</p></div></Button>
         
        </div>
    </div>
  )
}

export default Navbar