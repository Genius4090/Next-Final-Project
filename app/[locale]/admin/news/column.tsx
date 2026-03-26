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
import Link from "next/link"
import { useRouter } from "@/i18n/navigation"

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
    accessorKey: "author.username",
    header: "Author",
  },
  {
    header: "Author's name",
    accessorFn: (row) => `${row.author?.firstName} ${row.author?.lastName}`,
  },
  {
    accessorKey: "author.email",
    header: "Email",
  },
 
  {
    header: "Actions",

    id: "actions",
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
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy userID
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]




