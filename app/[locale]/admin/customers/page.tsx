import { GetAllFn } from "@/services"
import { columns } from "./column"
import { DataTable } from "./data-table"

const page = async () => {

  const customers = await GetAllFn("/customer")
  console.log(customers);
  

  return (
    <div className="p-10">
        <DataTable columns={columns} data={customers} />
  </div>
  )
}

export default page


