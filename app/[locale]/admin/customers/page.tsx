import { GetAllFn } from "@/services"
import { columns } from "./column"
import { DataTable } from "./data-table"

const CustomersPage = async () => {

  const customers = await GetAllFn("/customer")

  

  return (
    <div className="p-10">
        <DataTable columns={columns} data={customers} />
  </div>
  )
}

export default CustomersPage


