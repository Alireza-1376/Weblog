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
        <div className="p-4 overflow-x-hidden w-screen md:w-auto h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-800">
                            مدیریت مقالات
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            مدیریت، ویرایش و حذف مقالات وبلاگ
                        </p>
                    </div>

                    <Link
                        href="/admin/articles/addArticle"
                        className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                    >
                        <FiPlus size={18} />
                        افزودن مقاله جدید
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto scrollbar-thin">
                    <table className="min-w-300 w-full">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    #
                                </th>

                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    تصویر
                                </th>

                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    عنوان
                                </th>

                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    نویسنده
                                </th>

                                {/* <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    دسته‌بندی
                                </th> */}

                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    تاریخ انتشار
                                </th>

                                <th className="px-2 py-3 text-center text-sm font-bold text-slate-600">
                                    عملیات
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortArticles.map((article, index) => (
                                <tr
                                    key={article.id}
                                    className="border-b border-slate-100 transition-all hover:bg-slate-50"
                                >
                                    <td className="px-2 py-3 text-center text-slate-700">
                                        {index + 1}
                                    </td>

                                    <td className="px-2 py-3">
                                        <div className="mx-auto relative h-16 w-24 overflow-hidden rounded-xl">
                                            {article.image &&
                                                <Image
                                                    src={`http://localhost:4004${article.image}`}
                                                    alt={article.title}
                                                    fill
                                                    unoptimized
                                                    className="object-cover"
                                                />
                                            }
                                        </div>
                                    </td>

                                    <td className="px-2 py-3 text-center">
                                        <div className="">
                                            <Link href={`/article/${article.id}`} className="font-semibold text-teal-800 border-b border-b-teal-800">
                                                {article.title}
                                            </Link>
                                        </div>
                                    </td>

                                    <td className="px-2 py-3 text-center text-slate-700 ">
                                        {article.author}
                                    </td>

                                    {/* <td className="px-2 py-3 text-center">
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                                            {article.categoryId}
                                        </span>
                                    </td> */}

                                    <td className="px-2 py-5 text-center text-slate-500">
                                        {new Date(
                                            article.createdAt
                                        ).toLocaleDateString("fa-IR")}
                                    </td>

                                    <td className="px-2 py-5 text-center">
                                        <ActivityBtns
                                            articleId={article.id}
                                        />
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