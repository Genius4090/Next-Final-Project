import { Hero, News, Order, Popular, WhyPage } from "@/modules";
import { GetAllFn } from "@/services";

const Home = async () => {
  const popularProducts = await GetAllFn("/products")
  const newsElements = await GetAllFn("/news")

  
  return (
   <div>
     <Hero/>
     <Popular popularProducts={popularProducts}/>
     <Order/>
     <WhyPage/>
     <News newsElements={newsElements}/>
   </div>
  );
}
export default Home