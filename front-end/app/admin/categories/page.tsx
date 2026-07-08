import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import ActivityBtns from "./_components/ActivityBtns";
import Pagination from "./_components/Pagination";


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
                    <Pagination categories={categories} countPerPage={4}/>
                </div>

            </div>

        </div>

    );
}