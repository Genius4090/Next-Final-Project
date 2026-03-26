import { BarChartComponent } from "@/components/barChart"
import { PieChartComponent } from "@/components/pieChart"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/public/icons"

const page = () => {
  return (
 <section className="flex flex-col py-15 items-center   gap-15 justify-around">
<div className="flex flex-col items-center justify-center">
<h2 className="text-5xl font-black text-center uppercase w-[700px] leading-[60px]">посмотри свой доход прямо сейчас!</h2>
<Button className="cursor-pointer  py-5! px-4! mt-4">Посмотреть доход <ArrowRightIcon/></Button>


</div>
 <div className="flex  justify-between w-full items-start gap-10 px-10">
 <BarChartComponent/>
 <PieChartComponent/>
 </div>
 </section>
  )
}

export default page