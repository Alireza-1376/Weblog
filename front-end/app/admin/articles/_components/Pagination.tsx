'use client'
import Image from "next/image"
import Link from "next/link"
import ActivityBtns from "./ActivityBtns"
import { Blog } from "@/types/blog"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginationBtns from "@/app/_components/PaginationBtns"
import { useEffect } from "react"

function Pagination({ sortArticles, countPerPage }: { sortArticles: Blog[], countPerPage: number }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const currentPage = Number(page) || 1;
    const lastPage = Math.ceil(sortArticles.length / countPerPage);
    const startIndex = (currentPage - 1) * countPerPage;
    const currentItems = sortArticles.slice(startIndex, startIndex + countPerPage);
    useEffect(() => {
        if (currentItems.length == 0 && currentPage != 1) {
            router.push(`${pathname}/?page=${currentPage - 1}`)
        }
    }, [currentItems])
    return (
        <>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-600">

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            #
                        </th>

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            تصویر
                        </th>

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            عنوان
                        </th>

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            نویسنده
                        </th>

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            تاریخ انتشار
                        </th>

                        <th className="px-2 py-3 text-center text-sm font-bold text-slate-600 dark:text-white">
                            عملیات
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((article, index) => (
                        <tr
                            key={article.id}
                            className="border-b border-slate-100 dark:border-slate-600 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                        >

                            <td className="px-2 py-3 text-center text-slate-700 dark:text-white">
                                {index + 1}
                            </td>

                            <td className="px-2 py-3">
                                <div className="relative mx-auto h-16 w-24 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-600">
                                    {article.image && (
                                        <Image
                                            src={`http://localhost:4004${article.image}`}
                                            alt={article.title}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            </td>

                            <td className="px-2 py-3 text-center">
                                <Link
                                    href={`/article/${article.id}`}
                                    className="border-b border-slate-700 dark:border-white font-semibold text-slate-800 dark:text-white"
                                >
                                    {article.title}
                                </Link>
                            </td>

                            <td className="px-2 py-3 text-center text-slate-700 dark:text-white">
                                {article.author}
                            </td>

                            <td className="px-2 py-5 text-center text-slate-500 dark:text-white">
                                {new Date(article.createdAt).toLocaleDateString("fa-IR")}
                            </td>

                            <td className="px-2 py-5 text-center">
                                <ActivityBtns articleId={article.id} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {lastPage > 1 &&
                <div className="flex justify-center">
                    <PaginationBtns currentPage={currentPage} lastPage={lastPage} />
                </div>
            }
        </>
    )
}

export default Pagination