"use server"

import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export async function changeRole(id: string, role: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("LoginToken")?.value;

    const response = await fetch(`http://localhost:4004/api/auth/users/${id}/role`, {
        method: "PUT",
        body: JSON.stringify(role == "admin" ? { role: "user" } : { role: "admin" }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await response.json();

    if (response.status == 200) {
        updateTag("deleteUser")
        return { data: data }
    }
}