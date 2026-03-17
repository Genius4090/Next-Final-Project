import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface newsListType {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  image: string
  description: string
  author: Author
}

interface Author {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: any
  email: string
  username: string
  avatar: string
  address: string
  position: string
  role: string
}

const News = ({newsElements} : {newsElements : newsListType[]}) => {
    const t = useTranslations("NewsPage")

    
    
  return (
    <section className="pb-10 pt-19">
        <div className="containers flex flex-col gap-17">
          <h2 className="text-5xl font-bold text-center">{t("title")}</h2>
          <ul className="flex items-center justify-center gap-25 mt-29">
            {newsElements?.splice(0,3).map(item =><li key={item.id} className="bg-white/40 rounded-[30px] pb-4 flex flex-col items-start gap-3 pl-6 pr-2">
             <Image src={`https://anorkhulov.uz/${item.image}`}  alt="news-image" width={213} height={157} className="w-auto h-auto -mt-20 rounded-[30px]"/>
             <p className="mt-3 max-w-[327px]">{item.description}</p>
             <div className="flex items-center gap-3">
             <Image src={`https://anorkhulov.uz/${item.author.avatar}`} alt="news-user-avatar" width={45} height={45} className="w-auto h-auto"/>
               <h2 className="text-lg font-semibold">{item.author.firstName}{item.author.lastName}</h2>
             </div>
            </li>)}
          </ul>
  <div className="w-full flex justify-end">
  <Button className="cursor-pointer py-6! px-5! rounded-br-none ">{t("btn")} <ArrowRightIcon/></Button>
  </div>

        </div>
    </section>
  )
}

export default News