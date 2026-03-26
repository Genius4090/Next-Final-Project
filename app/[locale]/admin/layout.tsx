import { Link } from "@/i18n/navigation";
import { Footer, TopHeader } from "@/modules";
import Header from "@/modules/admin/Header";
import Sidebar from "@/modules/admin/Sidebar";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function AdminLayout({children,}:{children: React.ReactNode;}) {

  const cookieStore = await cookies();
  const userRole = cookieStore.get("userRole")?.value;
  
  if(userRole != "ADMIN"){
  redirect("/")
  }
  return (
    <>
      <TopHeader />
      <main className="min-h-screen">
      <section className="py-21 w-full containers ">
    <div className="flex bg-white  rounded-xl p-2">

   <div className="flex flex-col justify-between w-[20%] h-full py-0.5    border-r">
  <div className="w-full h-[71px] flex items-center  border-b px-2">
   <Link href={"/admin"}><Image style={{ width: 'auto', height: 'auto' }} src={"/images/websiteLogo.svg"} alt="website-logo" width={136} height={71}/></Link>

  </div>
   <Sidebar/>
   </div>

    <div className="flex flex-col w-full">
    <Header/>
    <div className="h-full ">
    {children}
    </div>
    </div>
    </div>
    </section>
        
      </main>
      <Footer />
    </>
  );
}