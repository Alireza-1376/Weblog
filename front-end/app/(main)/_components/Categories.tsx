import { CategoriesType } from "@/types/categories";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function Categories({ allCategories }: { allCategories: CategoriesType[] }) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
                    دسته‌بندی مقالات
                </h2>

                <p className="mt-3 text-slate-500 dark:text-slate-200">
                    موضوع مورد علاقه خود را انتخاب کنید و مقالات مرتبط را مطالعه کنید.
                </p>
            </div>

            {/* Categories */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {allCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.id}?title=${category.title}`}
                        className="group rounded-3xl border border-slate-300 dark:bg-slate-500 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                    >
                        {/* Title */}
                        <h3 className="mb-4 text-xl font-bold text-slate-800 dark:text-white dark:group-hover:text-slate-100 transition-colors group-hover:text-teal-600">
                            {category.title}
                        </h3>

                        {/* Description */}
                        <p className="line-clamp-3 leading-8 text-slate-600 dark:text-white dark:group-hover:text-slate-100">
                            {category.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                            <span className="text-sm font-medium text-slate-500">
                                مشاهده مقالات
                            </span>

                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 dark:group-hover:bg-slate-600 group-hover:text-white">
                                <FaArrowLeft size={14} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories;