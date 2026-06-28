import { Comment } from "@/types/comment";

export const getComments = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/articles/${id}/comments`);
    const data: Comment[] = await response.json();
    return data;
}