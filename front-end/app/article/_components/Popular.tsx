import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

function Popular({ popularArticles }: { popularArticles: Blog[] }) {
    return (
        <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                        مقالات پربازدید
                    </h2>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-100">
                        محبوب‌ترین مقالات وبلاگ را مطالعه کنید
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {popularArticles.map((item) => (
                    <Link
                        key={item.id}
                        href={`/article/${item.id}`}
                        className="group overflow-hidden rounded-2xl border border-slate-300 dark:bg-slate-500 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
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
                        <div className="p-5">
                            <h3 className="mb-3 line-clamp-2 text-lg font-bold dark:text-white text-slate-800 transition-colors group-hover:text-teal-600 dark:group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="mb-5 line-clamp-3 text-sm leading-7 dark:text-white text-slate-500">
                                {item.content}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-700 dark:text-white">
                                        {item.author}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400 dark:text-white">
                                        نویسنده مقاله
                                    </p>
                                </div>

                                <div className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                                    {new Date(item.createdAt).toLocaleDateString(
                                        "fa-IR"
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Popular;