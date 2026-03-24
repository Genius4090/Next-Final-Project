"use client"
import { ContactType } from "@/@types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WrapperBox from "@/components/WrapperBox"
import { Contact, Navbar } from "@/modules"
import { SendContact } from "@/services"
import { SubmitEvent } from "react"
import { toast } from "sonner"


const page = () => {

  async function handleSubmit(e:SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget;
    const data:ContactType ={
      name: e.target.username.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    await SendContact(data).then(res => {
      toast.success("succesfully sent your contact info",{position: "top-center"})
      
    })
    form.reset();
  }
  return (
    <div className="py-21">
  <WrapperBox>
    <Navbar/>
    <Contact/>

    <div className="flex justify-center flex-col items-center">
    <form onSubmit={handleSubmit} className="w-[800px] py-10">
    <h2 className="text-5xl font-bold text-center">Написать нам</h2>
     <div className="flex flex-col gap-5 mt-15">
     <Input name="username" placeholder="Ваше имя" className="border-[#585858] rounded-none p-5 text-lg!"/>
      <Input name="email" placeholder="Ваш E-mail" className="border-[#585858] rounded-none p-5 text-lg!"/>
      {/* <Input placeholder="Ваш номер телефона" className="border-[#585858] rounded-none p-5 text-lg!"/> */}
      <Input name="message" placeholder="Ваше сообщение" className="border-[#585858] rounded-none p-5 text-lg!"/>
     </div>
      <div className="w-full flex justify-end mt-8">
  <Button className="py-6! px-9! cursor-pointer">Отправить</Button>
  </div>
    </form>
 
    </div>
  </WrapperBox>
    </div>
  )
}

export default page