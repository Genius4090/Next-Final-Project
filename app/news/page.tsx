import WrapperBox from "@/components/WrapperBox"
import { Navbar, NewsExtended } from "@/modules"
import Gallery from "@/modules/Gallery"


const page = () => {
  return (
    <section className="pt-21 pb-10">
      <WrapperBox>
        <Navbar/>
     <div className="mt-40">
     <NewsExtended/>
     <Gallery/>
     </div>
      </WrapperBox>
    </section>
  )
}

export default page