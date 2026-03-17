import OrderContent from "./orderContent"
import { GetAllFn } from "@/services"

const page = async () => {
  const newsElements = await GetAllFn("/news")


  return <OrderContent newsElements={newsElements}/>
}

export default page