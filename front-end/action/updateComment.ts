"use server"

import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateComment(state: { statusCode: number }, formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;

    const content = formData.get("content");
    const commentId = formData.get("commentId");

    const response = await fetch(`http://localhost:4004/api/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({ content }),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();

    if (response.status == 200) {
        updateTag("updateComments")
    }
    return { statusCode: response.status }
}