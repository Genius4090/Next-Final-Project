import { GetAllFn } from "@/services"
import NewsContent from "./newsContent"


const NewsPage = async () => {
  const newsExtended = await GetAllFn("/news")
  const galleryList = await GetAllFn("/galleries")
  
  return <NewsContent galleryList={galleryList} newsExtended={newsExtended}/>
}

export default NewsPage