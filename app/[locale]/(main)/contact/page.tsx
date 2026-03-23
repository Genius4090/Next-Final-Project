import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WrapperBox from "@/components/WrapperBox"
import { Contact, Navbar } from "@/modules"


const page = () => {
  return (
    <div className="py-21">
  <WrapperBox>
    <Navbar/>
    <Contact/>

    <div className="flex justify-center flex-col items-center">
    <form className="w-[800px] py-10">
    <h2 className="text-5xl font-bold text-center">Написать нам</h2>
     <div className="flex flex-col gap-5 mt-15">
     <Input placeholder="Ваше имя" className="border-[#585858] rounded-none p-5 text-lg!"/>
      <Input placeholder="Ваш E-mail" className="border-[#585858] rounded-none p-5 text-lg!"/>
      <Input placeholder="Ваш номер телефона" className="border-[#585858] rounded-none p-5 text-lg!"/>
      <Input placeholder="Ваше сообщение" className="border-[#585858] rounded-none p-5 text-lg!"/>
     </div>
      <div className="w-full flex justify-end mt-8">
  <Button className="py-6! px-9!">Отправить</Button>
  </div>
    </form>
 
    </div>
  </WrapperBox>
    </div>
  )
}

export default page