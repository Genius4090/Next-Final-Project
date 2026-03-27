import MenuContent from "./menuContent"
import { GetAllFn } from "@/services"

const MenuPage = async () => {

  const products = await GetAllFn("/products")
  
  const categories = await GetAllFn("/categories")
  return <MenuContent products={products} categories={categories}/>
}

export default MenuPage