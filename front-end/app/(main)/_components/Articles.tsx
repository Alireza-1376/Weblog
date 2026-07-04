import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

function Articles({ allArticles }: { allArticles: Blog[] }) {
    return (
        // <section className="max-w-7xl mx-auto px-4 py-16">
        //     <h2 className="text-2xl md:text-3xl font-bold mb-10">
        //         آخرین مقالات
        //     </h2>

        //     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        //         {allArticles.map((article) => {
        //             return (
        //                 <Link href={`/article/${article.id}`} key={article.id} className="overflow-hidden rounded-2xl border border-gray-500 bg-white shadow-md transition hover:scale-[1.01] hover:shadow-lg">
        //                     <div className="relative h-56">
        //                         {article.image &&
        //                             <Image
        //                                 src={`http://localhost:4004${article.image}`}
        //                                 alt="/images/1.jfif"
        //                                 fill
        //                                 className="object-cover"
        //                                 unoptimized
        //                             />
        //                         }
        //                     </div>

        //                     <div className="p-5">
        //                         <h3 className="text-lg font-bold mb-3">
        //                             {article.title}
        //                         </h3>

        //                         <p className="text-gray-600 mb-4 line-clamp-2">
        //                             {article.content}
        //                         </p>

        //                         <div className="flex items-center justify-between pb-4">
        //                             <div>
        //                                 <p className="text-sm text-gray-500">{article.author}</p>
        //                             </div>
        //                             <div>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</div>
        //                         </div>

        //                         <button className="rounded-lg cursor-pointer bg-teal-700 px-4 py-2 text-white transition hover:bg-gray-800">
        //                             مطالعه مقاله
        //                         </button>
        //                     </div>
        //                 </Link>
        //             )
        //         })}
        //     </div>
        // </section>
        <section className="mx-auto max-w-7xl px-4 py-16">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-800">
                    آخرین مقالات
                </h2>

                <p className="mt-3 text-slate-500">
                    جدیدترین مطالب منتشر شده در وبلاگ را مطالعه کنید.
                </p>
            </div>

            {/* Articles */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {allArticles.map((article) => (
                    <Link
                        href={`/article/${article.id}`}
                        key={article.id}
                        className="group overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                        <div className="p-6">
                            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-teal-600">
                                {article.title}
                            </h3>

                            <p className="mb-5 line-clamp-3 leading-7 text-slate-600">
                                {article.content}
                            </p>

                            {/* Meta */}
                            <div className="mb-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                                <span>{article.author}</span>

                                <span>
                                    {new Date(article.createdAt).toLocaleDateString(
                                        "fa-IR"
                                    )}
                                </span>
                            </div>

                            {/* Button */}
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-teal-600 transition-colors group-hover:text-teal-700">
                                    مطالعه مقاله
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                                    ←
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Articles;