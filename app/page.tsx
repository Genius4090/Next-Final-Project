import { Hero, News, Order, Popular, WhyPage } from "@/modules";

export default function Home() {
  return (
   <div>
     <Hero/>
     <Popular/>
     <Order/>
     <WhyPage/>
     <News/>
   </div>
  );
}
