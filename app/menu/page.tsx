import { FoodType } from "@/@types"
import FoodCard from "@/components/FoodCard"
import WrapperBox from "@/components/WrapperBox"
import { Navbar, News } from "@/modules"
import Image from "next/image"


const MenuPage = () => {
  const menuList:{id:number,title:string,isActive:boolean}[] = [
    {
      id:1,
      title:"Первые",
      isActive:true
    },
    {
      id:2,
      title:"Вторые",
      isActive:false
    },
    {
      id:3,
      title:"Салаты",
      isActive:false
    },
    {
      id:4,
      title:"Напитки",
      isActive:false
    },
    {
      id:5,
      title:"Фаст-Фуд",
      isActive:false
    },
  ]

  const foodList:FoodType[] = [
    {
      id:"1",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"2",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"3",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"4",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"5",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"6",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"7",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"8",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"9",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"10",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"11",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    },
    {
      id:"12",
      name:"Chicken soup",
      description:"Spicy with garlic",
      price:"10.00",
      image:"/images/popular-img.png"
    }
  ]
  return (
    <section className="py-21 relative">
      {/* <Image src={"/images/wrapper-bg.png"} alt="wrapper-bg" width={1300} height={1500} className="w-full h-auto absolute"/> */}
      <WrapperBox>
        <Navbar/>
      <div className="menu-box flex flex-col items-center mt-40 ">
      <h2 className="text-5xl font-bold">Меню</h2>
       <ul className="menu-nav  bg-white/40 flex items-center center gap-2 py-3 px-5 rounded-full mt-14">
        {menuList.map(item => <li className={`text-lg px-5 py-1 font-semibold  ${item.isActive && "bg-white/40  rounded-full"}`} key={item.id}>{item.title}</li>)}
       </ul>
       <ul className="food-list flex flex-wrap justify-center gap-x-8 gap-y-35 py-20 mt-17">
      {foodList.map(item => <FoodCard key={item.id} item={item}/>)}
       </ul>
      </div>
      </WrapperBox>
      <News/>
    </section>
  )
}

export default MenuPage