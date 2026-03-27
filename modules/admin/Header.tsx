"use client"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { useMemo } from "react"
const Header = () => {
  const path = usePathname()
  const router = useRouter()
  const routes = [
    {
      pattern: /^\/admin\/menu\/create$/,
      label: "Create Menu Item",
    },
    {
      pattern: /^\/admin\/menu\/(\d+)\/update$/,
      getTitle: (match: RegExpMatchArray) => `Update Menu / ${match[1]}`,
    },
    {
      pattern: /^\/admin\/menu\/(\d+)$/,
      getTitle: (match: RegExpMatchArray) => `Menu / ${match[1]}`,
    },
    {
      pattern: /^\/admin\/menu$/,
      label: "Menu",
    },
  
    // other routes
    { pattern: /^\/admin$/, label: "Home" },
    { pattern: /^\/admin\/customers$/, label: "Customers" },
  ]
  const title = useMemo(() => {
    for (const route of routes) {
      const match = path.match(route.pattern)
      if (match) {
        return route.getTitle ? route.getTitle(match) : route.label!
      }
    }
    return "Unknown page"
  }, [path])

  
  return (
    <div className="w-full border-b py-5 px-4 flex items-center justify-between">
     <div className="flex items-center gap-4">
     <Button onClick={()=> router.back()} size={"icon-sm"} className="cursor-pointer"><ArrowLeft/></Button>
     <h3 className="text-2xl">{title}</h3>
     </div>
    </div>
  )
}

export default Header