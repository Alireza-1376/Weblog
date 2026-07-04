"use server"

import { JwtType } from "@/types/auth";
import { jwtDecode } from "jwt-decode";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addArticle(state: { message: string, statusCode: number }, formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;
    let author;
    if (token) {
        const decode: JwtType = jwtDecode(token);
        author = decode.username
    }
    const title = formData.get("title")
    const content = formData.get("content")
    const categoryId = formData.get("categoryId");
    const articleId = formData.get("articleId")
    const image = formData.get("image") as File;

    const payload = new FormData();
    payload.append("title", String(title));
    payload.append("content", String(content));
    payload.append("categoryId", String(categoryId));
    payload.append("author", String(author)) ;
    if (image && image.size > 0) {
        payload.append("image", image)
    }

    if (articleId) {
        const response = await fetch(`http://localhost:4004/api/articles/${articleId}/with-image`, {
            method: "PUT",
            body: payload,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })

        const data = await response.json();
        updateTag('articles')
        return { message: data, statusCode: response.status }

    } else {
        const response = await fetch("http://localhost:4004/api/articles/with-image", {
            method: "POST",
            body: payload,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })

        const data = await response.json();
        updateTag('articles')
        return { message: data, statusCode: response.status }
    }

}