import { CategoriesType } from "@/types/categories";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function Categories({ allCategories }: { allCategories: CategoriesType[] }) {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-10">
                دسته‌بندی مقالات
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
                {allCategories.map((category) => {
                    return (
                        <Link
                            key={category.id}
                            href={`/category/${category.id}?title=${category.title}`}
                            className="group rounded-2xl border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="mb-3 text-xl font-bold">
                                {category.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {category.description}
                            </p>

                            <span className="flex items-center mt-5 gap-2 text-sm font-medium text-teal-700">
                                <span> مشاهده مقالات </span>
                                <span><FaArrowLeft /></span>
                            </span>
                        </Link>
                    )
                })}

            </div>
        </section>
    )
}

export default Categories;