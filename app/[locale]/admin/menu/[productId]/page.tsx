import { GetById } from "@/services"
import ProductContent from "./productContent";

const ProductMore = async ({params}:{params:{productId:string}}) => {
    const {productId} = await params
    const foundProduct = await GetById(Number(productId))
  
    
  return (
   <ProductContent foundProduct={foundProduct}/>
  )
}

export default ProductMore