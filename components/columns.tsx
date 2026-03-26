"use client"

import { ColumnDef } from "@tanstack/react-table"

export type User = {
  username: string
  email: string
  firstName: string
  lastName: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "fullName",
    header: "Full Name",
    cell: ({ row }) => {
      const user = row.original
      return `${user.firstName} ${user.lastName}`
    },
  },
]