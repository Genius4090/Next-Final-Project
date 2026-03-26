import { GetAllFn } from "@/services"
import { columns } from "./column"
import { DataTable } from "./data-table"

const CategoryPage = async () => {

  const categories = await GetAllFn("/categories")

  

  return (
    <div className="p-10">
        <DataTable columns={columns} data={categories} />
  </div>
  )
}

export default CategoryPage


