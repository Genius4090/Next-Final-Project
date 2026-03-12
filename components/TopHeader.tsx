import { MailIcon, PhoneIcon, RussiaIcon } from "@/public/icons"

const TopHeader = () => {
  return (
    <section>
   <div className="containers">
 <div>
    <span><PhoneIcon/> <p>info@bmgsoft.com</p></span>
    <span><MailIcon/><p>+998(90)758383833</p></span>
 </div>
 <div>
    
   <div>
   <RussiaIcon/>
   <select> 
        <option value="russian"> Русский</option>
    </select>
   </div>

 </div>
   </div>
    </section>
  )
}

export default TopHeader