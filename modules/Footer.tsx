import { SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4 } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface footerListType {
    id:number,
    ulTitle:string,
    children: Array<{childId:number,title:string}>
  }

const Footer = () => {
const t = useTranslations("FooterPage")
const footerList:footerListType[] = [
    {
        id:1,
        ulTitle: t("box1.title"),
        children: [
            {
                childId:1,
                title:t("box1.text1")
            },
            {
                childId:2,
                title:t("box1.text2")
            },
            {
                childId:3,
                title:t("box1.text3")
            },
            {
                childId:4,
                title:t("box1.text4")
            }
        ]
    },
    {
        id:2,
        ulTitle:t("box2.title"),
        children: [
            {
                childId:5,
                title:t("box1.text1")
            },
            {
                childId:6,
                title:t("box1.text2")
            },
            {
                childId:7,
                title:t("box1.text3")
            }
        ]
    },
    {
        id:3,
        ulTitle:t("box3.title"),
        children: [
            {
                childId:8,
                title:t("box3.text1")
            },
            {
                childId:9,
                title:t("box3.text2")
            },
            {
                childId:10,
                title:t("box3.text3")
            }
        ]
    }
   ]

  return (
    <section className="footer-box mt-10 w-full bg-center bg-no-repeat bg-cover">
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