import { GetById } from "@/services"
import UpdatePage from "./updateContent"


const page = async ({params}:{params:{productId:string}}) => {
    const {productId} = await params
    const foundProduct = await GetById(Number(productId))
  return (
    <UpdatePage foundProduct={foundProduct}/>
  )
}

export default page