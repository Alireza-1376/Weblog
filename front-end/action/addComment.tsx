"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"



export const addComment = async (state: { message: string }, formData: FormData) => {
    const cookie = await cookies();
    const token = cookie.get('LoginToken')?.value;
    const content = formData.get("content")
    const articleId = formData.get("articleId")

    const response = await fetch("http://localhost:4004/api/comments", {
        method: "POST",
        body: JSON.stringify({ content, articleId }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    revalidatePath(`/atricle/[articleId]`)

    console.log(response)

    return { message: "" }
}