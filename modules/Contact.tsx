import { ContactIcon1, ContactIcon2, ContactIcon3 } from "@/public/icons"
import { ReactNode } from "react"

const Contact = () => {
 interface ContactType {
    id:number,
    icon:ReactNode,
    title:string,
    info:Array<string>
 }
    
    const contactData:ContactType[] = [
        {
            id: 1,
            icon: <ContactIcon1/>,
            title: "Напишите нам",
            info: ["info@bmgsoft.com","t.me/bmgsoft.com"]
        },
        {
            id: 2,
            icon: <ContactIcon2/>,
            title: "Позвоните нам",
            info: ["+9998908767888","+9989865332322"]
        },
        {
            id: 3,
            icon: <ContactIcon3/>,
            title: "Посетите нас",
            info: ["Узбекистан, Ташкент Улица, 24"]
        }
    ]
  return (
    <div className="pt-15 pb-25 flex flex-col items-center gap-20">
      <h2 className="text-5xl font-bold text-center">Связаться с нами</h2>
      <ul className="flex gap-[155px] ">
        {contactData.map(item => <li className=" flex flex-col items-center">
            {item.icon}
            <h3 className="mt-6 text-2xl">{item.title}</h3>
            {item.info.map((infoItem,index:number) => <p className="text-center w-[158px] mt-[2px]" key={index}>{infoItem}</p>)}
        </li>)}
      </ul>

    </div>
  )
}

export default Contact