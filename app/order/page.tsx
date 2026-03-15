import { DatePickerInput } from "@/components/datePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import WrapperBox from "@/components/WrapperBox"
import { Contact, Navbar, News } from "@/modules"
import Image from "next/image"

const page = () => {
  const scheduleList:{id:number,day:string,start:string,end:string}[] = [
    {
      id:1,
      day:"Понедельник",
      start:"10:00",
      end:"23:00"
    },
    {
      id:2,
      day:"Вторник",
      start:"10:00",
      end:"23:00"
    },
    {
      id:3,
      day:"Среда",
      start:"10:00",
      end:"23:00"
    },
    {
      id:4,
      day:"Четверг",
      start:"10:00",
      end:"23:00"
    }, {
      id:5,
      day:"Пятница",
      start:"10:00",
      end:"23:00"
    },
    {
      id:6,
      day:"Воскресенье",
      start:"11:00",
      end:"22:00"
    }
  ]
  return (
    <section className="pt-21 pb-10">
      <WrapperBox>
        <Navbar/>
        <div className="mt-40">
        <h2 className="text-5xl font-bold text-center">Бронирование</h2>
         <div className="flex justify-center gap-30 py-20 items-center">
          <div className="w-[554px]">
          <h4 className="text-[32px] font-bold mb-9 ">Часы работы</h4>
         <ul className="flex flex-col gap-6">
          {scheduleList.map(item => <li key={item.id} className="w-full border-b flex justify-between py-1 text-lg">
            <span>{item.day}</span>
            <p>{item.start}-{item.end}</p>
          </li>)}
         </ul>
          </div>
        
         <Image src={"/images/order-img.png"} alt="order-image" width={503} height={676}/>
         </div>
        </div>
<form className="w-full flex justify-center  rounded-[31px]">
       <div className="flex w-[902px] flex-col items-center  gap-10  py-10 px-13 relative pt-20 z-2">
       
        <h2 className="text-5xl font-extrabold">Хотите забронировать стол?</h2>

        <Input  placeholder="Ваш Номер" className=" border-transparent border-b-black rounded-none px-0 py-5 text-base!"/>

        <Select>
  <SelectTrigger className="w-full border-transparent border-b-black rounded-none px-0 py-5  text-base!">
    <SelectValue placeholder="На сколько человек?" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {/* Placeholder, disabled so not selectable */}
      <SelectItem value="0" disabled>
        На сколько человек?
      </SelectItem>

      {/* Actual selectable items */}
      <SelectItem value="1">1 человек</SelectItem>
      <SelectItem value="2">2 человека</SelectItem>
      <SelectItem value="3">3 человека</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

  {/* The actual time input */}
  <DatePickerInput />
<InputGroup>
      {/* The actual time input */}
      <InputGroupInput
     
        type="time"
        className="border-b text-base! border-black"
      />
    </InputGroup>

    
       
<div className="w-full">
<Select>
  <SelectTrigger className="w-full border-transparent border-b-black rounded-none px-0 pb-6 text-base! ">
    <SelectValue placeholder="Выберите место" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {/* Placeholder, disabled so not selectable */}
      <SelectItem value="0" disabled>
      Выберите место
      </SelectItem>

      {/* Actual selectable items */}
      <SelectItem value="1">Ташкент</SelectItem>
      <SelectItem value="2">Андижан</SelectItem>
      <SelectItem value="3">Фергана</SelectItem>
    </SelectGroup>
  </SelectContent>

</Select>
<h2 className="text-[#06004C] text-sm mt-3 cursor-pointer">Выбрать места на карте</h2>
</div>
<div className="w-full flex justify-end">
<Button className="cursor-pointer py-6! px-9! ">Забронировать </Button>
</div>
       </div>
      </form>
      <Contact/>
      </WrapperBox>
      <News/>
    </section>
  )
}

export default page