import { Login, ReciveLoginData, ReciveRegisterData, Register, UserProfile } from "@/types/auth";

export const registerUser = async (userData: Register) => {
    const response = await fetch(`http://localhost:4004/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data: ReciveRegisterData = await response.json()
    return { statusCode: response.status, data: data };
}

export const loginUser = async (userData: Login) => {
    const response = await fetch(`http://localhost:4004/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data: ReciveLoginData = await response.json()
    return data;
}

export const getUserProfile = async (token: string | undefined) => {
    const response = await fetch("http://localhost:4004/api/auth/profile", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const user: UserProfile = await response.json()
    return user;
}

export const getAllUsers = async (token: string | undefined) => {
    const response = await fetch("http://localhost:4004/api/auth/users", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data: UserProfile[] = await response.json();
    return data;
}
