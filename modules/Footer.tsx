import { SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4 } from "@/public/icons"
import Image from "next/image"

const Footer = () => {
  interface footerListType {
    id:number,
    ulTitle:string,
    children: Array<{childId:number,title:string}>
  }
const footerList:footerListType[] = [
    {
        id:1,
        ulTitle:"Наши услуги",
        children: [
            {
                childId:1,
                title:"Цены"
            },
            {
                childId:2,
                title:"Отслеживание"
            },
            {
                childId:3,
                title:"Cообщить об ошибке"
            },
            {
                childId:4,
                title:"Условия услуг"
            }
        ]
    },
    {
        id:2,
        ulTitle:"Наши услуги",
        children: [
            {
                childId:5,
                title:"Отчетность"
            },
            {
                childId:6,
                title:"Cвяжитесь с нами"
            },
            {
                childId:7,
                title:"Управление"
            }
        ]
    },
    {
        id:3,
        ulTitle:"Наши услуги",
        children: [
            {
                childId:8,
                title:"Узбекистан, Ташкент Улица, 24"
            },
            {
                childId:9,
                title:"+99894848844848"
            },
            {
                childId:10,
                title:"info@bmgsoft.com"
            }
        ]
    }
   ]

  return (
    <section className="footer-box mt-10 w-full ">
        <div className="containers py-15 flex gap-[159px]">
         <div className="flex flex-col items-start gap-6">
            <Image className="w-auto h-auto" src={"/images/websiteLogo.svg"} alt="footer-logo" width={136} height={70}/>
            <ul className="flex gap-[10px]">
                <li><SocialIcon1/></li>
                <li><SocialIcon2/></li>
                <li><SocialIcon3/></li>
                <li><SocialIcon4/></li>
            </ul>
         </div>
         <div className="flex gap-[179px]">
        {
            footerList.map(item => <ul key={item.id} className="">
                <h2 className="text-[25px] font-bold">{item.ulTitle}</h2>
                <div className="flex flex-col gap-2 mt-3 max-w-[160px]">
                {item.children.map(child => <li key={child.childId} className="">{child.title}</li>)}
                </div>
                
            </ul>)
            
        }
         </div>
        </div>
    </section>
  )
}

export default Footer