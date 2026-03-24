"use client"
import { TableType } from "@/@types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import WrapperBox from "@/components/WrapperBox"
import { Contact, Navbar } from "@/modules"
import NewsPage from "@/modules/News"
import { AddReservation, GetAllFn } from "@/services"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { SubmitEvent, useEffect, useState } from "react"
import { toast } from "sonner"

const OrderContent = () => {
  const [tableList,setTableList] = useState<TableType[]>([])
  
  
  const handleSubmit = async (e:SubmitEvent<HTMLFormElement>) => {
   const form = e.currentTarget;
  e.preventDefault()
  const data = {
    customerName: e.target.customerName.value,
      email : e.target.email.value,
      guestCount: Number(e.target.guestCount.value),
      reservationDate: e.target.reservationDate.value,
      reservationTime: e.target.reservationTime.value,
      tableId:Number(e.target.tableId.value)

  }
  
  await AddReservation(data).then(res => toast.success("sucessfully sent your reservation",{position: "top-center"}))
  form.reset()
  
  
  

  }

  useEffect(()=>{
    const getTables = async () => {
      await GetAllFn("/restaurant-tables").then(res => setTableList(res)
      )
    }
    getTables()
   },[])






  const t = useTranslations("OrderPage")
  const scheduleList:{id:number,day:string,start:string,end:string}[] = [
    {
      id:1,
      day:t("scheduleBox.day1"),
      start:"10:00",
      end:"23:00"
    },
    {
      id:2,
      day:t("scheduleBox.day2"),
      start:"10:00",
      end:"23:00"
    },
    {
      id:3,
      day:t("scheduleBox.day3"),
      start:"10:00",
      end:"23:00"
    },
    {
      id:4,
      day:t("scheduleBox.day4"),
      start:"10:00",
      end:"23:00"
    }, {
      id:5,
      day:t("scheduleBox.day5"),
      start:"10:00",
      end:"23:00"
    },
    {
      id:6,
      day:t("scheduleBox.day6"),
      start:"11:00",
      end:"22:00"
    }
  ]
  return (
    <section className="pt-21 pb-10">
      <WrapperBox>
        <Navbar/>
        <div className="mt-40">
        <h2 className="text-5xl font-bold text-center">{t("title")}</h2>
         <div className="flex justify-center gap-30 py-20 items-center">
          <div className="w-[554px]">
          <h4 className="text-[32px] font-bold mb-9 ">{t("scheduleBox.title")}</h4>
         <ul className="flex flex-col gap-6">
          {scheduleList.map(item => <li key={item.id} className="w-full border-b flex justify-between py-1 text-lg">
            <span>{item.day}</span>
            <p>{item.start}-{item.end}</p>
          </li>)}
         </ul>
          </div>
        
         <Image src={"/images/order-img.png"} alt="order-image" width={503} height={676} style={{ width: 'auto', height: 'auto' }}/>
         </div>
        </div>
<form onSubmit={handleSubmit} className="w-full flex justify-center  rounded-[31px]">
       <div className="flex w-[902px] flex-col items-center  gap-10  py-10 px-13 relative pt-20 z-2">
       
        <h2 className="text-5xl font-extrabold">{t("orderBox.title")}</h2>

        <Input name="customerName" placeholder="Ваша имя" className="border-transparent border-b-black rounded-none text-base! px-0 pb-2"/>
        <Input name="email"  placeholder={t("inp1")} className=" border-transparent border-b-black rounded-none px-0 py-5 text-base!"/>

        <Select name="guestCount">
  <SelectTrigger className="w-full border-transparent border-b-black rounded-none px-0 py-5  text-base!">
    <SelectValue placeholder={t("inp2")} />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {/* Placeholder, disabled so not selectable */}
      <SelectItem value="0" disabled>
      {t("inp2")}
      </SelectItem>

      {/* Actual selectable items */}
      <SelectItem value="1">1 человек</SelectItem>
      <SelectItem value="2">2 человека</SelectItem>
      <SelectItem value="3">3 человека</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

  {/* The actual time input */}
  <Input type="date" name="reservationDate" className="border-transparent border-b-black rounded-none px-0 pb-2 text-base!"/>
<InputGroup>
      {/* The actual time input */}
      <InputGroupInput
        name="reservationTime"
        type="time"
        className="border-b text-base! border-black"
      />
    </InputGroup>

    
       
<div className="w-full">
<Select name="tableId">
  <SelectTrigger className="w-full border-transparent border-b-black rounded-none px-0 pb-6 text-base! ">
    <SelectValue placeholder= {t("inp5")} />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {/* Placeholder, disabled so not selectable */}
      <SelectItem value="0" disabled>
      {t("inp5")}
      </SelectItem>

      {/* Actual selectable items */}
      {tableList.map(item =>  <SelectItem key={item.id} value={`${item.id}`}>{item.location}</SelectItem>)}
    </SelectGroup>
  </SelectContent>

</Select>
</div>
<div className="w-full flex justify-end">
<Button className="cursor-pointer py-6! px-9! "> {t("btn")} </Button>
</div>
       </div>
      </form>
      <Contact/>
      </WrapperBox>
     <NewsPage/>
    </section>
  )
}

export default OrderContent