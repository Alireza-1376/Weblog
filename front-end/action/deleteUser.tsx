"use server"

import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export async function deleteUser(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;

    const response = await fetch(`http://localhost:4004/api/auth/users/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    if(response.status==200){
        updateTag("deleteUser")
        return {statusCode:response.status}
    }
}