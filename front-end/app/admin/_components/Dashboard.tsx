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

    const filterComments = comments.filter((comments) => {
        return new Date(comments.createdAt).getFullYear() >= new Date().getFullYear() - 1
    })

    console.log(comments)


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
        <main className="p-4 overflow-x-hidden  w-screen md:w-auto h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Stats */}
                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-slate-400 p-6 transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-400">
                                            {item.title}
                                        </p>

                                        <h2 className="mt-3 text-3xl font-bold">
                                            {item.value}
                                        </h2>
                                    </div>

                                    <div className="rounded-2xl bg-blue-500/10 p-4">
                                        <Icon
                                            size={28}
                                            className="text-blue-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Content */}
                <section className="grid gap-6 lg:grid-cols-3">
                    {/* Recent Posts */}
                    <div className="p-2 lg:col-span-2 rounded-3xl border border-slate-400">
                        <div className=" h-120 p-2 scrollbar-thin overflow-auto">
                            <div className="mb-6 flex items-center gap-2">
                                <HiOutlineDocumentText
                                    size={22}
                                    className="text-blue-400"
                                />

                                <h3 className="text-lg font-semibold">
                                    مقالات اخیر
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {filterArticle.map((art) => (
                                    <div
                                        key={art.id}
                                        className="flex items-center justify-between rounded-2xl border border-slate-400 p-4"
                                    >
                                        <div>
                                            <h4 className="font-medium">
                                                {art.title}
                                            </h4>

                                            <span className="mt-2 block text-sm text-slate-500">
                                                {new Date(art.createdAt).toLocaleString("fa-IR", {
                                                    year: "numeric",
                                                    month: "2-digit",
                                                    day: "2-digit"
                                                })}
                                            </span>
                                        </div>

                                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">
                                            منتشر شده
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* {comments} */}
                    <div className="rounded-3xl border border-slate-400 p-2">
                        <div className="p-2 h-120 scrollbar-thin overflow-auto">
                            <div className="mb-6 flex items-center gap-2">
                                <HiOutlineChatBubbleLeftRight
                                    size={22}
                                    className="text-blue-400"
                                />

                                <h3 className="text-lg font-semibold">
                                    آخرین نظرات
                                </h3>
                            </div>

                            <div className="space-y-4 ">
                                {filterComments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="rounded-2xl border border-slate-400 p-4"
                                    >
                                        <p className="font-medium">
                                            {comment.author}
                                        </p>

                                        <p className="mt-2 text-sm text-slate-400">
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