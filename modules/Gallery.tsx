import { useTranslations } from "next-intl"
import Image from "next/image"

const Gallery = () => {
    const t = useTranslations()
    const galleryList:{id:number,image:string}[] = [
        {
            id:1,
            image: "/images/gallery-img.png"
        },{
            id:2,
            image: "/images/gallery-img.png"
        },{
            id:3,
            image: "/images/gallery-img.png"
        },
        {
            id:4,
            image: "/images/gallery-img.png"
        },{
            id:5,
            image: "/images/gallery-img.png"
        },{
            id:6,
            image: "/images/gallery-img.png"
        },
        {
            id:7,
            image: "/images/gallery-img.png"
        },{
            id:8,
            image: "/images/gallery-img.png"
        }
    ]
  return (
    <section className="py-10">
      <h2 className="text-5xl font-bold text-center">{t("GalleryPage.title")}</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-12 justify-center mt-19"> 
            {galleryList.map(item => <li key={item.id}>
                <Image src={item.image} alt="item-image" width={274} height={185} className="w-auto h-auto"/>
            </li>)}
        </ul>
        <div className="w-full flex justify-center">
     <span className="w-10 h-10 my-10 cursor-pointer rounded-full border bg-white/40 flex items-center justify-center">1</span>
  </div>
    </section>
  )
}

export default Gallery