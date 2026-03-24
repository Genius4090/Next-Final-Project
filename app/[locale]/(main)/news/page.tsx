import { GetAllFn } from "@/services"
  import WrapperBox from "@/components/WrapperBox"
import { Navbar, NewsExtended } from "@/modules"
import Gallery from "@/modules/Gallery"


const NewsPage = async () => {
  const newsExtended = await GetAllFn("/news")
  const galleryList = await GetAllFn("/galleries")
  
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

export default NewsPage