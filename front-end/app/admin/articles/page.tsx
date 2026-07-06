import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { getAllArticles } from "@/services/blogs";
import ActivityBtns from "./_components/ActivityBtns";

export default async function ArticlesTable() {
    const articles = await getAllArticles();

    const sortArticles = [...articles].sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        if (dateA > dateB) {
            return -1
        }
        if (dateB > dateA) {
            return 1
        }
        return -1
    })

    return (
        <div className="w-screen md:w-full md:col-span-8 lg:col-span-9 xl:col-span-10 h-[calc(100vh-67.2px)] overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-slate-800 p-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-6 shadow-md">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">
                            مدیریت مقالات
                        </h1>

                        <p className="mt-2 text-sm text-slate-500 dark:text-white">
                            مدیریت، ویرایش و حذف مقالات وبلاگ
                        </p>
                    </div>

                    <Link
                        href="/admin/articles/addArticle"
                        className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 dark:bg-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-slate-800"
                    >
                        <FiPlus size={18} />
                        افزودن مقاله جدید
                    </Link>

                </div>

                {/* Table */}
                <div className="overflow-x-auto scrollbar-thin">

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

                            {sortArticles.map((article, index) => (
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

                </div>

            </div>

        </div>


    );
}