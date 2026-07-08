import { getAllUsers } from "@/services/auth";
import { getAllArticles } from "@/services/blogs";
import { getAllComments } from "@/services/comment";
import { cookies } from "next/headers";
import {
    HiOutlineDocumentText,
    HiOutlineUsers,
    HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default async function DashboardPage() {
    const coockeStore = await cookies();
    const token = coockeStore.get("LoginToken")?.value;

    const [users, articles, comments] = await Promise.all([
        getAllUsers(token),
        getAllArticles(),
        getAllComments()
    ])

    const filterArticle = articles.filter((art) => {
        return new Date(art.createdAt).getFullYear() >= new Date().getFullYear() - 1
    })

    const sortArticles = [...filterArticle].sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        if (dateA > dateB) {
            return -1
        }
        if (dateB > dateA) {
            return 1
        }
        return -1
    })

    const filterComments = comments.filter((comments) => {
        return new Date(comments.createdAt).getFullYear() >= new Date().getFullYear() - 1
    })

    const sortComments = [...filterComments].sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        if (dateA > dateB) {
            return -1
        }
        if (dateB > dateA) {
            return 1
        }
        return -1
    })


    const stats = [
        {
            title: "مقالات",
            value: articles.length,
            icon: HiOutlineDocumentText,
        },
        {
            title: "کاربران",
            value: users.length,
            icon: HiOutlineUsers,
        },
        {
            title: "نظرات",
            value: comments.length,
            icon: HiOutlineChatBubbleLeftRight,
        },
    ];

    return (
        <main className="p-4 overflow-x-hidden w-screen md:w-auto h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10 bg-slate-100 dark:bg-slate-800">

            <div className="mx-auto max-w-7xl space-y-6">

                {/* Stats */}
                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                            rounded-3xl
                            border border-slate-200 dark:border-slate-600
                            bg-white dark:bg-slate-700
                            p-6
                            shadow-sm
                            transition-all
                        "
                            >
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-slate-500 dark:text-white">
                                            {item.title}
                                        </p>

                                        <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white">
                                            {item.value}
                                        </h2>
                                    </div>

                                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-600 p-4">
                                        <Icon
                                            size={28}
                                            className="text-slate-700 dark:text-white"
                                        />
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </section>

                {/* Content */}
                <section className="grid gap-6 lg:grid-cols-3">

                    {/* Recent Articles */}
                    <div className="lg:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-2 shadow-sm">
                        <div className="h-115 overflow-auto scrollbar-thin p-4">

                            <div className="mb-6 flex items-center gap-2">

                                <div className="rounded-xl bg-slate-100 dark:bg-slate-600 p-2">
                                    <HiOutlineDocumentText
                                        size={20}
                                        className="text-slate-700 dark:text-white"
                                    />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                                    مقالات اخیر
                                </h3>

                            </div>

                            <div className="space-y-4">

                                {sortArticles.map((art) => (
                                    <div
                                        key={art.id}
                                        className="
                                    flex items-center justify-between
                                    rounded-2xl
                                    border border-slate-200 dark:border-slate-600
                                    bg-slate-50 dark:bg-slate-800
                                    p-4
                                "
                                    >
                                        <div>

                                            <h4 className="font-medium text-slate-800 dark:text-white">
                                                {art.title}
                                            </h4>

                                            <span className="mt-2 block text-sm text-slate-500 dark:text-white">
                                                {new Date(art.createdAt).toLocaleString(
                                                    "fa-IR",
                                                    {
                                                        year: "numeric",
                                                        month: "2-digit",
                                                        day: "2-digit",
                                                    }
                                                )}
                                            </span>

                                        </div>

                                        <span
                                            className="
                                        rounded-full
                                        bg-slate-200 dark:bg-slate-600
                                        px-3 py-1
                                        text-xs
                                        text-slate-700 dark:text-white
                                    "
                                        >
                                            منتشر شده
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                    {/* Comments */}
                    <div
                        className="
                    rounded-3xl
                    border border-slate-200 dark:border-slate-600
                    bg-white dark:bg-slate-700
                    p-2
                    shadow-sm
                "
                    >
                        <div className="h-115 overflow-auto scrollbar-thin p-4">

                            <div className="mb-6 flex items-center gap-2">

                                <div className="rounded-xl bg-slate-100 dark:bg-slate-600 p-2">
                                    <HiOutlineChatBubbleLeftRight
                                        size={20}
                                        className="text-slate-700 dark:text-white"
                                    />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                                    آخرین نظرات
                                </h3>

                            </div>

                            <div className="space-y-4">

                                {sortComments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="
                                    rounded-2xl
                                    border border-slate-200 dark:border-slate-600
                                    bg-slate-50 dark:bg-slate-800
                                    p-4
                                "
                                    >
                                        <p className="font-medium text-slate-800 dark:text-white">
                                            {comment.author}
                                        </p>

                                        <p className="mt-2 text-sm text-slate-500 dark:text-white">
                                            {comment.content}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </section>

            </div>

        </main>


    );
}