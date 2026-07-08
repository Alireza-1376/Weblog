"use client"
import { CategoriesType } from "@/types/categories";
import ActivityBtns from "./ActivityBtns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginationBtns from "@/app/_components/PaginationBtns";
import { useEffect } from "react";

function Pagination({ categories, countPerPage }: { categories: CategoriesType[], countPerPage: number }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const currentPage = Number(page) || 1;
    const lastPage = Math.ceil(categories.length / countPerPage);
    const startIndex = (currentPage - 1) * countPerPage;
    const currentItems = categories.slice(startIndex, startIndex + countPerPage);
    useEffect(() => {
        if (currentItems.length == 0 && currentPage != 1) {
            router.push(`${pathname}/?page=${currentPage-1}`)
        }
    }, [currentItems])
    return (
        <>
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-600 text-right">

                        <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                            #
                        </th>

                        <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                            عنوان دسته‌بندی
                        </th>

                        <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                            توضیحات
                        </th>

                        <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                            عملیات
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {currentItems.map((category) => (
                        <tr
                            key={category.id}
                            className="border-b border-slate-100 dark:border-slate-600 text-center transition hover:bg-slate-50 dark:hover:bg-slate-800"
                        >

                            <td className="px-4 py-5 text-slate-700 dark:text-white">
                                {category.id}
                            </td>

                            <td className="px-4 py-5 font-semibold text-slate-800 dark:text-white">
                                {category.title}
                            </td>

                            <td className="px-4 py-5 text-slate-500 dark:text-white">
                                {category.description}
                            </td>

                            <td className="px-4 py-5">
                                <ActivityBtns categoryId={category.id} />
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>
            {lastPage > 1 &&
                <PaginationBtns currentPage={currentPage} lastPage={lastPage} />
            }
        </>
    )
}

export default Pagination;