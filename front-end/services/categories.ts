import { CategoriesType } from "@/types/categories";

export const getAllCategories = async () => {
    const response = await fetch("http://localhost:4004/api/categories", {
        next: {
            tags: ["categories"],
        },
    });
    const data: CategoriesType[] = await response.json();
    return data;
}

export const getOneCategory = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/categories/${id}`)
    const data: CategoriesType = await response.json();
    return data;
}