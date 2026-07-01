import { CommentType } from "@/types/comment";

export const getAllComments = async () => {
    const response = await fetch(`http://localhost:4004/api/comments`);
    const data: CommentType[] = await response.json();
    return data;
}


export const getComments = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/articles/${id}/comments`);
    const data: CommentType[] = await response.json();
    return data;
}