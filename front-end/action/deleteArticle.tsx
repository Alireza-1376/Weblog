"use server"

import { cookies } from "next/headers";

export async function deleteArticle(id: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;
    const response = await fetch(`http://localhost:4004/api/articles/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if (response.status == 200) {
        return { statusCode: response.status };
    }
}