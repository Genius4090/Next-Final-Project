import { GalleryType, NewsType } from "@/@types"
import WrapperBox from "@/components/WrapperBox"
import { Navbar, NewsExtended } from "@/modules"
import Gallery from "@/modules/Gallery"

const NewsContent = ({newsExtended,galleryList}:{newsExtended : NewsType[],galleryList: GalleryType[]}) => {
  return (
    <section className="pt-21 pb-10">
    <WrapperBox>
      <Navbar/>
   <div className="mt-40">
   <NewsExtended newsExtended={newsExtended}/>
   <Gallery galleryList={galleryList}/>
   </div>
    </WrapperBox>
  </section>
  )
}

export default NewsContent