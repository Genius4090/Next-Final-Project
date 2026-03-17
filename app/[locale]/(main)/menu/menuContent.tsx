"use client"
import { CategoryType, NewsType, ProductType } from "@/@types"
import FoodCard from "@/components/FoodCard"
import WrapperBox from "@/components/WrapperBox"
import instance from "@/hooks/instance"
import { Navbar, News } from "@/modules"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"



const MenuContent = ({newsElements,products,categories}: {newsElements :NewsType[],products : ProductType[],categories: CategoryType[]}) => {
  const t = useTranslations("MenuPage")

  const [filteredProducts,setFilteredProducts] = useState<ProductType[]>(products)
  const [categoryId,setCategoryId] = useState<number>(1)

  useEffect(()=>{
  instance().get(`/products?categoryId=${categoryId}`).then(res => setFilteredProducts(res.data.data))
  },[categoryId])
  
  return (
    <section className="py-21 relative">
      {/* <Image src={"/images/wrapper-bg.png"} alt="wrapper-bg" width={1300} height={1500} className="w-full h-auto absolute"/> */}
      <WrapperBox>
        <Navbar/>
      <div className="menu-box flex flex-col items-center mt-40 ">
      <h2 className="text-5xl font-bold">{t("title")}</h2>
       <ul className="menu-nav bg-white/40 flex items-center center gap-2 py-3 px-5 rounded-full mt-14">
        {categories.map(item => <button onClick={()=> setCategoryId(Number(item.id))} className={`text-lg px-5 py-1 font-semibold cursor-pointer ${item.isActive && "bg-white/40  rounded-full"}`} key={item.id}>{item.name}</button>)}
       </ul>
       <ul className="food-list flex flex-wrap justify-center gap-x-8 gap-y-35 py-20 mt-17">
      {filteredProducts.length > 0 ? filteredProducts.map(item => <FoodCard key={item.id} item={item}/>) :  <p>No matching food found</p>}
     
       </ul>
      </div>
      </WrapperBox>
      <News newsElements={newsElements}/>
    </section>
  )
}

export default MenuContent