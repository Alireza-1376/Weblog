"use server"

import { updateTag } from "next/cache";
import { cookies } from "next/headers";


export async function deleteCategory(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;

    const response = await fetch(
        `http://localhost:4004/api/categories/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await response.json()

    if (response.status == 200) {
        updateTag("categories")
        return {
            statusCode:response.status ,
            message : data
        }
    }

}