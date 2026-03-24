import { Hero, Order, Popular, WhyPage } from "@/modules";
import NewsPage from "@/modules/News";
import { GetAllFn } from "@/services";

const Home = async () => {
  const popularProducts = await GetAllFn("/products")


  
  return (
   <div>
     <Hero/>
     <Popular popularProducts={popularProducts}/>
     <Order/>
     <WhyPage/>
     <NewsPage/>
   </div>
  );
}
export default Home