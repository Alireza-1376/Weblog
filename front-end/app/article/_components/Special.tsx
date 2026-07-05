import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

function Special({ specialArticles }: { specialArticles: Blog[] }) {
    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-20 rounded-2xl border border-slate-300 dark:bg-slate-500 bg-white p-5 shadow-sm">
                {/* Header */}
                <div className="mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        مقالات ویژه
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 dark:text-white">
                        پیشنهادهای ویژه برای مطالعه
                    </p>
                </div>

                {/* Articles */}
                <div className="space-y-4">
                    {specialArticles.map((item) => (
                        <Link
                            key={item.id}
                            href={`/article/${item.id}`}
                            className="group flex gap-4 rounded-xl p-2 transition-all duration-300 dark:hover:bg-slate-600 hover:bg-slate-50"
                        >
                            {/* Image */}
                            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl dark:border dark:border-white">
                                {item.image && (
                                    <Image
                                        src={`http://localhost:4004${item.image}`}
                                        alt={item.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between">
                                <h4 className="line-clamp-2 text-sm font-semibold dark:text-white text-slate-800 transition-colors dark:group-hover:text-white group-hover:text-teal-600">
                                    {item.title}
                                </h4>

                                <span className="text-xs text-slate-400 dark:text-white">
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString("fa-IR")}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Special;