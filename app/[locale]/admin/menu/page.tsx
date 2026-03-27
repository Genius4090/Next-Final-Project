import { columns } from "./column"
import { DataTable } from "./data-table"
import { GetAllFn } from "@/services";

const MenuPage = async () => {
const products = await GetAllFn("/products")
  return (
    <div className="p-10">
        
        <DataTable columns={columns} data={products} />
  </div>
  )
}

export default MenuPage


