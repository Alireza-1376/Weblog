export type Register = {
    username: string,
    email: string,
    password: string
}

export type UserInfo = {
    id: string,
    username: string,
    email: string,
    role: string,
    createdAt: string
}

export type ReciveRegisterData = {
    message: string,
    user: UserInfo
}

export type Login = {
    username: string,
    password: string
}
export type ReciveLoginData = {
    message: string,
    token: string,
    user: UserInfo
}

export interface UserProfile {
    id: string;
    username: string;
    email: string;
    role: "user" | "admin";
    createdAt: string;
}