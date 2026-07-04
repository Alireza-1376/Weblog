"use server"

import { updateTag } from "next/cache";
import { cookies } from "next/headers"

export async function addCategory(state: { message: string, statusCode: number }, formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;
    const title = formData.get("title")
    const description = formData.get('description')
    const categoryId = formData.get('editCategory')

    if (categoryId) {
        const response = await fetch(`http://localhost:4004/api/categories/${categoryId}`, {
            method: "PUT",
            body: JSON.stringify({ title, description }),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
        const data = await response.json()

        if (response.status == 200) {
            updateTag("categories")
        }
        return { message: data, statusCode: response.status }
    } else {
        const response = await fetch("http://localhost:4004/api/categories", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
        const data = await response.json()

        if (response.status == 201) {
            updateTag("categories")
        }
        return { message: data, statusCode: response.status }
    }

}