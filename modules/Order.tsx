"use client"
import { Input } from "@/components/ui/input"
import { PlateIcon } from "@/public/icons"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SubmitEvent, useEffect, useState } from "react";
import { AddReservation, GetAllFn } from "@/services";
import { TableType } from "@/@types";
import { toast } from "sonner";

const Order = () => {
  const t = useTranslations("OrderPage")
 const [tableList,setTableList] = useState<TableType[]>([])
  
  
  const handleSubmit = async (e:SubmitEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget;
  const data = {
    customerName: e.target.customerName.value,
      email : e.target.email.value,
      guestCount: Number(e.target.guestCount.value),
      reservationDate: e.target.reservationDate.value,
      reservationTime: e.target.reservationTime.value,
      tableId:Number(e.target.tableId.value),

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

  return (
    <div className="containers py-40 flex items-center justify-start relative">
      <form onSubmit={handleSubmit} className="w-[463px] bg-[#cccccc] rounded-[31px]">
       <div className="flex flex-col items-start  gap-10  py-10 px-13 relative pt-20 z-2">
       <div className="bg-black px-7 py-6 rounded-full absolute -top-10 border-6 border-[#cccccc]">
        <PlateIcon/>
        </div>
        <h2 className="text-[32px] font-bold">{t("heroTitle")}</h2>
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
  {/* <DatePickerInput /> */}
<InputGroup >
      {/* The actual time input */}
      <InputGroupInput
      name="reservationTime"
        type="time"
        className="border-b text-base! border-black pb-2"
      />
    </InputGroup>

    
       
<div className="w-full">
<Select name="tableId">
  <SelectTrigger className="w-full border-transparent border-b-black rounded-none px-0 pb-6 text-base! ">
    <SelectValue placeholder={t("inp5")} />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>

      <SelectItem value="0" disabled>
      {t("inp5")}
      </SelectItem>

 
      {tableList.map(item => <SelectItem  key={item.id} value={`${item.id}`}>{item.location}</SelectItem>)}

    </SelectGroup>
  </SelectContent>

</Select>
</div>
<Button className="cursor-pointer py-6! px-9!"> {t("btn")}</Button>
       </div>

      </form>
     <Image className=" absolute -right-5" src={"/images/hero-order-img.png"} alt="order-image" width={1025} height={936} style={{ width: 'auto', height: 'auto' }}/>
    </div>
  )
}

export default Order