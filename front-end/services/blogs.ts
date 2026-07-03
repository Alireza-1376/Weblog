import { Blog } from "@/types/blog";

export const getAllArticles = async () => {
    const response = await fetch("http://localhost:4004/api/articles", {
        next: {
            tags: ["articles"]
        }
    });
    const data: Blog[] = await response.json();
    return data;
}

export const getOneArticle = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/articles/${id}`);
    const data: Blog = await response.json();
    return data;
}

export const getArticleWithCategoryId = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/articles?categoryId=${id}`);
    const data: Blog[] = await response.json();
    return data;
}

