"use client"
import { Button } from "@/components/ui/button"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { LogOutIcon, MailIcon, PhoneIcon, SignInIcon } from "@/public/icons"
import { useLocale, useTranslations } from "next-intl"



// shadcn 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { deleteCookie, getCookie } from "cookies-next"
import { ArrowBigLeft } from "lucide-react"

const TopHeader = () => {

  const [user, setUser] = useState<{ username: string } | null>(null);
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations()
  const [scrolled, setScrolled] = useState<boolean>(false)
 
useEffect(() => {
  const value = getCookie("userInfo");
  if (value) {
    try {
      const parsed = JSON.parse(value as string);
      setUser(parsed);
    } catch (err) {
      console.error("Failed to parse userInfo cookie:", err);
      setUser(null);
    }
  } else {
    setUser(null);
  }
}, []);



  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // show after 50px scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  function handleLogOut(){
    deleteCookie("token")
    deleteCookie("userInfo")
    deleteCookie("userId")
    deleteCookie("userRole")
    setUser(null)
  }
  return (
    <section className={`py-3 fixed w-full z-40 ${scrolled ? "backdrop-blur-md" : "bg-transparent"}`}>
   <div className="containers flex items-center justify-between">
 <div className="flex gap-[27px]">
 <button onClick={()=> router.back()} className="flex items-center gap-[11px] cursor-pointer"><ArrowBigLeft/></button>

    <span className="flex items-center gap-[11px]"><PhoneIcon/> <p>info@bmgsoft.com</p></span>
    <span className="flex items-center gap-[11px]"><MailIcon/><p>+998(90)758383833</p></span>
 </div>
 <div className="flex gap-9">
    
 

   <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-3 text-base bg-transparent border-none">
           
              {locale === "ru" ? <span className="fi fi-ru"></span> :  <span className="fi fi-gb"></span> }
                
                {locale === "ru" ? "Русский" : "English"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[160px] p-2">
              <button
                onClick={() => changeLanguage("ru")}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
              >
                <span className="fi fi-ru border border-gray-200"></span>
                Русский
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
              >
                 <span className="fi fi-gb"></span>
                English
              </button>
            </PopoverContent>
  </Popover>
           
             {user ? <Popover>
            <PopoverTrigger asChild>
            <Button className="py-3! px-3.5! text-sm cursor-pointer"><SignInIcon/>{user?.username}</Button>
            </PopoverTrigger>

            <PopoverContent className="w-[160px] p-2">
            <Button onClick={()=> handleLogOut()} className="py-3! px-3.5! text-sm cursor-pointer bg-red-500"><LogOutIcon/>{t("Topbar.exit")}</Button>
            </PopoverContent>
          </Popover> :  
          <Button className="py-3! px-3.5! text-sm cursor-pointer"><SignInIcon/><Link href={"/login"}>{t("Topbar.title")}</Link></Button>}
           
   
 </div>
   </div>
    </section>
  )
}

export default TopHeader