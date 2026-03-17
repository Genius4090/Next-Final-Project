import { useTranslations } from "next-intl"
import MenuContent from "./menuContent"
import { GetAllFn } from "@/services"

const MenuPage = async () => {

  const newsElements = await GetAllFn("/news")
  const products = await GetAllFn("/products")
  const categories = await GetAllFn("/categories")
  return <MenuContent newsElements={newsElements} products={products} categories={categories}/>
}

export default MenuPage