"use client"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"

const Header = () => {
  const path = usePathname()
  const router = useRouter()
  const pathList = [
    { id: 1, label: "Home", path: "/admin" },
    { id: 2, label: "Customers", path: "/admin/customers" },
    { id: 3, label: "Menu", path: "/admin/menu" },
    { id: 4, label: "Categories", path: "/admin/category" },
    { id: 5, label: "News", path: "/admin/news" },
    { id: 6, label: "Reservations", path: "/admin/reservations" },
    { id: 7, label: "Contact", path: "/admin/contact" },
  ]

  const findPath = pathList.find(item => item.path === path)
  
  return (
    <div className="w-full border-b py-5 px-4 flex items-center justify-between">
     <div className="flex items-center gap-4">
     <Button onClick={()=> router.back()} size={"icon-sm"} className="cursor-pointer"><ArrowLeft/></Button>
     <h3 className="text-2xl">{findPath?.label || "Unknown page"}</h3>
     </div>
    </div>
  )
}

export default Header