import { Button } from "@/components/ui/button"
import WrapperBox from "@/components/WrapperBox"
import { Navbar, News } from "@/modules"
import NewsPage from "@/modules/News"
import Team from "@/modules/Team"
import { ArrowRightIcon } from "@/public/icons"
import { GetAllFn } from "@/services"
import Image from "next/image"

const AboutPage =  async () => {
//  const teams = await GetAllFn("/team")



  return (
    <div className="py-21">
      <WrapperBox>
      <Navbar/>
<div className="px-14">


<div className=" mx-auto mt-20">
  <h2 className="text-center font-bold text-5xl ">О нас</h2>
  <div className="mt-10">
    <p className="text-xl tracking-tight">С 1995 года наша миссия в ресторане — питать и вдохновлять каждого члена команды, гостя и сообщество, которому мы служим. Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От нашего меню до наших услуг и способов ведения бизнеса — наш свежий, неожиданный и человечный взгляд отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем.</p>
    <p className="text-xl tracking-tight mt-10">Имея более 450 ресторанов в 26 штатах и ​​более 8000 членов команды, мы два года подряд были названы Forbes одним из лучших работодателей Америки в области разнообразия. Денверский деловой журнал признал нас одним из лучших мест для работы. Мы считаем, что эти успехи основаны на нашей уникальной и заботливой культуре, благодаря которой каждый, кто входит в наши двери, чувствует себя желанным гостем и оцененным по достоинству.</p>
  </div>
</div>

<div className="flex mt-21 justify-between">

  <div className="w-[564px] flex flex-col gap-10 items-start  py-5">
    <h4 className=" font-bold text-[40px] ">Наша еда</h4>
    <p className="text-xl tracking-tight">Наша страсть — создавать исключительные впечатления от еды по отличной цене. От традиционных и современных блюд до наших собственных кулинарных творений, таких как фаршированные тортеллони премиум-класса, наши свежеприготовленные рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира.</p>
    <p className="text-xl tracking-tight">От «Пенне Роза» до японской лапши, салата «Мед» и всемирно известных макарон с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено яркими, яркими и приятными вкусами.</p>
    <Button className="cursor-pointer py-6! px-5! rounded-br-none ">Посмотреть меню<ArrowRightIcon/></Button>

  </div>
  <Image src={"/images/aboutImg1.png"} alt="about-img1" width={503} height={676} style={{ width: 'auto', height: 'auto' }}/>
</div>


 
  <div className="flex justify-between my-26 ">
   <Image src={"/images/aboutImg2.png"} alt="about-img2" width={503} height={676} style={{ width: 'auto', height: 'auto' }}/>
    <div  className="w-[564px] flex flex-col gap-10 items-start py-5">
    <h4 className=" font-bold text-[40px] ">Наш путь</h4>
    <p  className="text-xl tracking-tight">С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши.</p>
    <p className="text-xl tracking-tight">Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, такие как создание меню, наполненного свежими и захватывающими новыми вкусами; активация лучших в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообществах – и о нашей планете – которую мы называем домом.</p>
    </div>
   </div>
  


<Team />
</div>

      </WrapperBox>
      <NewsPage/>
    </div>
  )
}

export default AboutPage