import { GalleryType } from "@/@types"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Gallery = ({galleryList} : {galleryList:GalleryType[]}) => {
    const t = useTranslations()
  return (
    <section className="py-10">
      <h2 className="text-5xl font-bold text-center">{t("GalleryPage.title")}</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-12 justify-center mt-19"> 
            {galleryList.map(item => <li key={item.id}>
                <Image src={`https://anorkhulov.uz/${item.image}`} alt="item-image" width={274} height={185} className="w-[274px] h-[185px]"/>
            </li>)}
        </ul>
        <div className="w-full flex justify-center">
     <span className="w-10 h-10 my-10 cursor-pointer rounded-full border bg-white/40 flex items-center justify-center">1</span>
  </div>
    </section>
  )
}

export default Gallery