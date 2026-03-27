import { GetAllFn, GetById } from "@/services"
import ProductByIdContent from "./productByIdContent"


const ProductByIdPage = async ({params}:{params:{productId:string}}) => {
  const  {productId} = await params
  const popularProducts = await GetAllFn("/products")
  const moreProduct = await GetById(Number(productId))
  
  return <ProductByIdContent singleProduct={moreProduct}  popularProducts={popularProducts}/>
}

export default ProductByIdPage