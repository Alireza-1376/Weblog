import Pagination from "@/app/(main)/_components/Pagination";
import { Blog } from "@/types/blog";

function Articles({ allArticles }: { allArticles: Blog[] }) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
                    آخرین مقالات
                </h2>

                <p className="mt-3 text-slate-500 dark:text-slate-200">
                    جدیدترین مطالب منتشر شده در وبلاگ را مطالعه کنید.
                </p>
            </div>

            {/* Articles */}

            <Pagination allArticles={allArticles} countPerPage={6} />

        </section>
    )
}

export default Articles;