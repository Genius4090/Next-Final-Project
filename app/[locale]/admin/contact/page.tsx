import { cookies } from "next/headers";
import { columns } from "./column"
import { DataTable } from "./data-table"
import { getContact } from "@/services";

const ContactPage = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("token")?.value;

const contacts = await getContact(token,Number(userId))

  return (
    <div className="p-10">
        <DataTable columns={columns} data={contacts} />
  </div>
  )
}

export default ContactPage


