import { cookies } from "next/headers";
import { columns } from "./column"
import { DataTable } from "./data-table"
import { getReservations } from "@/services";

const NewsPage = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("token")?.value;

const reservations = await getReservations(token,Number(userId))
  return (
    <div className="p-10">
        <DataTable columns={columns} data={reservations} />
  </div>
  )
}

export default NewsPage


