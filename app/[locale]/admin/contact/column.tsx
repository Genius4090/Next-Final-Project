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
    accessorKey: "name",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
 
  {
    accessorKey: "phone",
    header: "Phone number",
  },
  {
    header: "Message",
    id: "message",
    cell: ({ row }) => {
      const payment = row.original
             
      return (
        <DropdownMenu >
          <DropdownMenuTrigger className="bg-gray-200" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[200px] min-h-[100px]">
            <DropdownMenuLabel>User's message</DropdownMenuLabel>
            <DropdownMenuItem 
            >
             {payment.message}
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]




