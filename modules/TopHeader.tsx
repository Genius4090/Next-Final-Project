import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, RussiaIcon, SignInIcon } from "@/public/icons"

const TopHeader = () => {
  return (
    <section className="py-3 fixed w-full z-100">
   <div className="containers flex items-center justify-between">
 <div className="flex gap-[27px]">
    <span className="flex items-center gap-[11px]"><PhoneIcon/> <p>info@bmgsoft.com</p></span>
    <span className="flex items-center gap-[11px]"><MailIcon/><p>+998(90)758383833</p></span>
 </div>
 <div className="flex gap-9">
    
   <div className="flex items-center">
   <RussiaIcon/>
   <select className="px-3 outline-none cursor-pointer"> 
        <option value="russian">Русский</option>
    </select>
   </div>
    <Button className="py-3! px-3.5! text-sm cursor-pointer"><SignInIcon/> Вход в aккаунт</Button>
 </div>
   </div>
    </section>
  )
}

export default TopHeader