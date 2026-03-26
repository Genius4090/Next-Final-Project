import { GetAllFn } from "@/services"
import { columns } from "./column"
import { DataTable } from "./data-table"

const NewsPage = async () => {

  const news = await GetAllFn("/news")

  

  return (
    <div className="p-10">
        <DataTable columns={columns} data={news} />
  </div>
  )
}

export default NewsPage


