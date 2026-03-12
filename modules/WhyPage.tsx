import { WhyIcon1, WhyIcon2, WhyIcon3, WhyIcon4, WhyIcon5, WhyIcon6 } from "@/public/icons"
import { ReactNode } from "react"

const WhyPage = () => {

  interface WhyDataType {
    id:number,
    icon: ReactNode,
    title: string,
    description:string
  }

  const whyDataList:WhyDataType[] = [
    {
      id:1,
      icon: <WhyIcon1/>,
      title: "Качественные продукты",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    },
    {
      id:2,
      icon: <WhyIcon2/>,
      title: "Быстрая доставка",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    },
    {
      id:3,
      icon: <WhyIcon3/>,
      title: "Вкусные рецепты",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    },
    {
      id:4,
      icon: <WhyIcon4/>,
      title: "Уютная атмосфера",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    },
    {
      id:5,
      icon: <WhyIcon5/>,
      title: "Опытные повара",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    },
    {
      id:6,
      icon: <WhyIcon6/>,
      title: "Обслуживания",
      description: "Входные билеты в музеи, для посещения достопримечательностей, памятников"
    }
  ]
  return (
    <div className=" py-10">
      <div className="containers">
        <h2 className="text-center text-5xl font-bold">Почему именно мы?</h2>
        <ul className="flex flex-wrap mt-19 items-center justify-center gap-20 ">
          {whyDataList.map(item => <li key={item.id} className="flex flex-col justify-between items-start h-[180px]  w-[380px]">
            {item.icon}
            <h3 className="text-[32px] font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </li>)}
          
        </ul>
      </div>
    </div>
  )
}

export default WhyPage