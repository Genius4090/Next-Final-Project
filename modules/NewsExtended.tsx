import { NewsType } from "@/@types"
import Image from "next/image"

const NewsExtended = ({newsExtended}:{newsExtended : NewsType[]}) => {
 


  
  return (
    <section className="pb-10 ">
        <div className="containers flex flex-col gap-14">
          <h2 className="text-5xl font-bold text-center">Новости</h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-45 mt-29">
            {newsExtended.map(item =><li key={item.id} className="bg-white/40 rounded-[30px] pb-4 flex flex-col items-start gap-3 pl-6 pr-2">
             <Image src={`https://anorkhulov.uz/${item.image}`} alt="news-image" width={213} height={157} className="w-auto h-auto -mt-20 rounded-[30px]"/>
             <p className="mt-3 max-w-[327px]">{item.description}</p>
             <div className="flex items-center gap-3">
             <Image src={`https://anorkhulov.uz/${item.author.avatar}`} alt="news-user-avatar" width={45} height={45} className="w-auto h-auto"/>
               <h2 className="text-lg font-semibold">{`${item.author.firstName} ${item.author.lastName}`}</h2>
             </div>
            </li>)}
          </ul>
  <div className="w-full flex justify-center">
     <span className="w-10 h-10 rounded-full border cursor-pointer bg-white/40 flex items-center justify-center">1</span>
  </div>

        </div>
    </section>
  )
}

export default NewsExtended