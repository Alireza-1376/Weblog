import { getArticleWithCategoryId } from "@/services/blogs";
import Image from "next/image";
import Link from "next/link";


async function CategoryId(props: PageProps<'/category/[categoryId]'>) {
    const { categoryId } = await props.params;
    const { title } = await props.searchParams;

    const articles = await getArticleWithCategoryId(categoryId);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-800">
                    {title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    جدیدترین مقالات این دسته‌بندی را مشاهده کنید.
                </p>
            </div>

            {/* Articles Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            {article.image && (
                                <Image
                                    src={`http://localhost:4004${article.image}`}
                                    alt={article.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="mb-3 line-clamp-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-teal-600">
                                {article.title}
                            </h3>

                            <p className="mb-5 line-clamp-3 leading-7 text-slate-500">
                                {article.content}
                            </p>

                            {/* Footer */}
                            <div className="mb-5 flex items-center justify-between border-t border-slate-100 pt-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-700">
                                        {article.author}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        نویسنده مقاله
                                    </p>
                                </div>

                                <div className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                                    {new Date(
                                        article.createdAt
                                    ).toLocaleDateString("fa-IR")}
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-end">
                                <span className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:bg-teal-700">
                                    مطالعه مقاله
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoryId;