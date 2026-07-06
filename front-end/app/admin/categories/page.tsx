import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import ActivityBtns from "./_components/ActivityBtns";


export default async function CategoriesTable() {
    const categories = await getAllCategories();

    return (
        <div className="w-screen md:w-auto md:col-span-8 lg:col-span-9 xl:col-span-10 h-[calc(100vh-67.2px)] overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-slate-800 p-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-6 shadow-md">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">
                            مدیریت دسته‌بندی‌ها
                        </h1>

                        <p className="mt-2 text-sm text-slate-500 dark:text-white">
                            مدیریت و سازماندهی دسته‌بندی‌های وبلاگ
                        </p>
                    </div>

                    <Link
                        href="/admin/categories/addCategory"
                        className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 dark:bg-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-slate-800"
                    >
                        <FiPlus size={18} />
                        افزودن دسته‌بندی
                    </Link>

                </div>

                {/* Table */}
                <div className="overflow-x-auto">

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

                            {categories.map((category) => (
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

                </div>

            </div>

        </div>

    );
}