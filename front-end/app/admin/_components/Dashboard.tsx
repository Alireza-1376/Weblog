
import {
    HiOutlineDocumentText,
    HiOutlineUsers,
    HiOutlineChatBubbleLeftRight,
    HiOutlineEye,
    HiOutlinePlus,
    HiOutlineClock,
    HiOutlineTag,
} from "react-icons/hi2";

export default function DashboardPage() {
    const stats = [
        {
            title: "مقالات",
            value: "124",
            icon: HiOutlineDocumentText,
        },
        {
            title: "کاربران",
            value: "1,284",
            icon: HiOutlineUsers,
        },
        {
            title: "نظرات",
            value: "534",
            icon: HiOutlineChatBubbleLeftRight,
        },
        {
            title: "بازدید کل",
            value: "82K",
            icon: HiOutlineEye,
        },
    ];

    return (
        <main className="p-4 overflow-x-hidden w-screen md:w-auto h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Stats */}
                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                    <div className="lg:col-span-2 rounded-3xl border border-slate-400 p-6">
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
                            {[
                                "آموزش کامل Next.js",
                                "TypeScript برای حرفه‌ای‌ها",
                                "شروع کار با React Query",
                                "مدیریت State در React",
                            ].map((post, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-2xl border border-slate-400 p-4"
                                >
                                    <div>
                                        <h4 className="font-medium">
                                            {post}
                                        </h4>

                                        <span className="mt-2 block text-sm text-slate-500">
                                            ۲ ساعت پیش
                                        </span>
                                    </div>

                                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">
                                        منتشر شده
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {comments} */}
                    <div className="rounded-3xl border border-slate-400 p-6">
                        <div className="mb-6 flex items-center gap-2">
                            <HiOutlineChatBubbleLeftRight
                                size={22}
                                className="text-blue-400"
                            />

                            <h3 className="text-lg font-semibold">
                                آخرین نظرات
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {[
                                "مقاله عالی بود",
                                "لطفا درباره Redux هم بنویسید",
                                "منتظر آموزش بعدی هستم",
                            ].map((comment, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-400 p-4"
                                >
                                    <p className="font-medium">
                                        کاربر {index + 1}
                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">
                                        {comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}