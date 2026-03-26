"use client"
import { Link, usePathname } from "@/i18n/navigation"

const Sidebar = () => {
     const path = usePathname()
    const sidebarList:{id:number,content:string,href:string}[] = [
        {
            id:1,
            content: "Home",
            href: "/admin"
        },
        {
            id:2,
            content: "Users",
            href: "/admin/users"
        },
        {
            id:3,
            content: "Menu",
            href: "/admin/menu"
        },
        {
            id:4,
            content: "Categories",
            href: "/admin/category"
        },
        {
            id:5,
            content: "News",
            href: "/admin/news"
        },
        {
            id:6,
            content: "Reservations",
            href: "/admin/reservations"
        },
        {
            id:7,
            content: "Contact",
            href: "/admin/contact"
        },
    ]
  return (
    <div className="w-full  h-screen  py-6 pr-3">
      
        <ul className="flex flex-col items-start gap-4 px-1">
            {sidebarList.map(item => <Link className={`duration-300 p-1 py-2 rounded w-full ${path === item.href ? "bg-white/60" : ""}`} key={item.id} href={item.href}>{item.content}</Link>)}
        </ul>
        
       
    </div>
  )
}

export default Sidebar