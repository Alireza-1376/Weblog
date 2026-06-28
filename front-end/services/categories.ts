import { CategoriesType } from "@/types/categories";

export const getAllCategories = async () => {
    const response = await fetch("http://localhost:4004/api/categories");
    const data: CategoriesType[] = await response.json();
    return data;
}