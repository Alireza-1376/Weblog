import { getArticleWithCategoryId } from "@/services/blogs";
import Image from "next/image";
import Link from "next/link";

async function CategoryId(props: PageProps<'/category/[categoryId]'>) {
    const { categoryId } = await props.params;
    const { title } = await props.searchParams;
    
    const articles = await getArticleWithCategoryId(categoryId)
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-10">{title}</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => {
                    return (
                        <Link href="" key={article.id} className="overflow-hidden rounded-2xl border border-gray-500 bg-white shadow-md transition hover:scale-[1.01] hover:shadow-lg">
                            <div className="relative h-56">
                                <Image
                                    src={`http://localhost:4004${article.image}`}
                                    alt="/images/1.jfif"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3">
                                    {article.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {article.content}
                                </p>

                                <div className="flex items-center justify-between pb-4">
                                    <div>
                                        <p className="text-sm text-gray-500">{article.author}</p>
                                    </div>
                                    <div>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</div>
                                </div>

                                <button className="rounded-lg cursor-pointer bg-teal-700 px-4 py-2 text-white transition hover:bg-gray-800">
                                    مطالعه مقاله
                                </button>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryId;