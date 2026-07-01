import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import ActivityBtns from "./_components/ActivityBtns";


export default async function CategoriesTable() {
    const categories = await getAllCategories();

    return (
        <div className="p-4 overflow-x-hidden w-screen md:w-auto h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-800">
                            مدیریت دسته‌بندی‌ها
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            مدیریت و سازماندهی دسته‌بندی‌های وبلاگ
                        </p>
                    </div>

                    <Link href="/admin/categories/addCategory" className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 cursor-pointer hover:shadow-lg hover:shadow-indigo-200">
                        <FiPlus size={18} />
                        افزودن دسته‌بندی
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-slate-200 text-right">
                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    #
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    عنوان دسته‌بندی
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    توضیحات
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    عملیات
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.map((category) => (
                                <tr
                                    key={category.id}
                                    className="border-b text-center border-slate-100 transition-all hover:bg-slate-50"
                                >
                                    <td className="px-4 py-5 text-center text-slate-700">
                                        {category.id}
                                    </td>

                                    <td className="px-4 py-5 text-center font-semibold text-slate-800">
                                        {category.title}
                                    </td>

                                    <td className="px-4 py-5 text-center text-slate-500">
                                        {category.description}
                                    </td>

                                    <td className="px-4 py-5 text-center">
                                        <ActivityBtns categoryId={category.id}/>
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