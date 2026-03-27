"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useState } from "react"
import { Link } from "@/i18n/navigation"

export const columns: ColumnDef<any>[] = [
 
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) =>
          row.toggleSelected(!!value)
        }
      />
    ),
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const original = row.getValue("image") as string
      const [src, setSrc] = useState(
        `https://anorkhulov.uz/${original}`
      )
  
      return (
        <Image
        src={src}
        
          alt="product"
          className="w-12 h-12 object-cover rounded-md"
          width={50}
          height={50}
          onError={() => setSrc("/images/notFoundFood.webp")}
        />
      )
    },
  },

  {
    accessorKey: "name",
    header: "Product name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
 
  {
    header: "Category",
    accessorKey: "category.name",
    cell: ({ row }) => row.original.category?.name || "—"
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
 
  {
    header: "Message",
    id: "message",
    cell: ({ row }) => {
      const product = row.original
             
      return (
        <DropdownMenu >
          <DropdownMenuTrigger className="bg-gray-200" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            
            <DropdownMenuItem asChild
            >
              
              <Link href={`/admin/menu/${product.id}`}>More</Link>
             
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy userID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]




