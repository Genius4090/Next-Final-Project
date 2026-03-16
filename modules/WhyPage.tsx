import { WhyIcon1, WhyIcon2, WhyIcon3, WhyIcon4, WhyIcon5, WhyIcon6 } from "@/public/icons"
import { useTranslations } from "next-intl"
import { ReactNode } from "react"

const WhyPage = () => {
  const t = useTranslations("WhyPage")
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
      title: t("el1.title"),
      description: t("el1.title"),
    },
    {
      id:2,
      icon: <WhyIcon2/>,
      title: t("el2.title"),
      description: t("el2.title"),
    },
    {
      id:3,
      icon: <WhyIcon3/>,
      title:  t("el3.title"),
      description:  t("el3.title"),
    },
    {
      id:4,
      icon: <WhyIcon4/>,
      title: t("el4.title"),
      description: t("el4.title"),
    },
    {
      id:5,
      icon: <WhyIcon5/>,
      title: t("el5.title"),
      description: t("el5.title"),
    },
    {
      id:6,
      icon: <WhyIcon6/>,
      title: t("el6.title"),
      description: t("el6.title"),
    }
  ]
  return (
    <div className=" py-10">
      <div className="containers">
        <h2 className="text-center text-5xl font-bold">{t("title")}</h2>
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