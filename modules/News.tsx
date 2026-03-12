import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/public/icons"
import Image from "next/image"

const News = () => {
 
    interface newsListType {
        id:number,
        img:string,
        description:string,
        userAvatar:string,
        userName:string
    }

    const newsList:newsListType[] = [
        {
            id:1,
            img: "/images/news-img-1.png",
            description: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
            userAvatar:"/images/news-avatar.png",
            userName:"Сергей"
        },
        {
            id:2,
            img: "/images/news-img-1.png",
            description: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
            userAvatar:"/images/news-avatar.png",
            userName:"Сергей"
        },
        {
            id:3,
            img: "/images/news-img-1.png",
            description: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
            userAvatar:"/images/news-avatar.png",
            userName:"Сергей"
        }
    ]
  return (
    <section className="pb-10 pt-19">
        <div className="containers flex flex-col gap-17">
          <h2 className="text-5xl font-bold text-center">Новости/Галерея</h2>
          <ul className="flex items-center justify-center gap-25 mt-29">
            {newsList.map(item =><li key={item.id} className="bg-white/40 rounded-[30px] pb-4 flex flex-col items-start gap-3 pl-6 pr-2">
             <Image src={item.img} alt="news-image" width={213} height={157} className="w-auto h-auto -mt-20 rounded-[30px]"/>
             <p className="mt-3 max-w-[327px]">{item.description}</p>
             <div className="flex items-center gap-3">
             <Image src={item.userAvatar} alt="news-user-avatar" width={45} height={45} className="w-auto h-auto"/>
               <h2 className="text-lg font-semibold">{item.userName}</h2>
             </div>
            </li>)}
          </ul>
  <div className="w-full flex justify-end">
  <Button className="cursor-pointer py-6! px-5! rounded-br-none ">Посмотреть все <ArrowRightIcon/></Button>
  </div>

        </div>
    </section>
  )
}

export default News