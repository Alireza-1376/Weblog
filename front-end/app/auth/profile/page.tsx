import { FaUser, FaEnvelope, FaCalendarAlt, FaShieldAlt, FaEdit, FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import { getUserProfile } from "@/services/auth";
import { cookies } from "next/headers";

async function ProfilePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('LoginToken')?.value
    const user = await getUserProfile(token)


    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };


    return (

        <div className="min-h-screen bg-white dark:bg-slate-800 flex items-center justify-center p-4">

            <div className="w-full max-w-5xl">

                <div className="overflow-hidden rounded-4xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-2xl">

                    {/* Header */}
                    <div className="relative h-36 bg-teal-700 dark:bg-slate-800">

                        <div className="absolute -bottom-14 right-8">
                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white dark:border-slate-700 bg-teal-700 dark:bg-slate-700 shadow-xl">
                                <FaUser className="text-5xl text-white" />
                            </div>
                        </div>

                    </div>

                    {/* Body */}
                    <div className="px-6 md:px-10 pt-20 pb-10">

                        {/* User Info */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            <div>

                                <div className="flex items-center gap-3">

                                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white">
                                        {user.username}
                                    </h1>

                                    {user.role === "admin" && (
                                        <MdVerified className="text-2xl text-teal-600 dark:text-white" />
                                    )}

                                </div>

                                <div className="mt-3">

                                    <span
                                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold
                                ${user.role === "admin"
                                                ? "bg-teal-700 dark:bg-slate-800 text-white"
                                                : "bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-white"
                                            }`}
                                    >
                                        {user.role === "admin"
                                            ? "مدیر سایت"
                                            : "کاربر"}
                                    </span>

                                </div>

                            </div>

                            <button
                                className="
                            rounded-2xl
                            bg-teal-700
                            dark:bg-slate-600
                            px-6
                            py-3
                            text-white
                            font-medium
                            transition
                            hover:bg-teal-800
                            dark:hover:bg-slate-800
                            cursor-pointer
                            flex
                            items-center
                            gap-2
                        "
                            >
                                <FaEdit />
                                ویرایش پروفایل
                            </button>

                        </div>

                        {/* Divider */}
                        <div className="my-8 h-px bg-slate-200 dark:bg-slate-600" />

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-6 transition hover:shadow-lg">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 dark:bg-slate-700">
                                    <FaEnvelope className="text-xl text-white" />
                                </div>

                                <p className="mb-1 text-sm text-slate-500 dark:text-white">
                                    ایمیل
                                </p>

                                <p className="break-all font-bold text-slate-800 dark:text-white">
                                    {user.email}
                                </p>

                            </div>

                            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-6 transition hover:shadow-lg">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 dark:bg-slate-700">
                                    <FaCalendarAlt className="text-xl text-white" />
                                </div>

                                <p className="mb-1 text-sm text-slate-500 dark:text-white">
                                    تاریخ عضویت
                                </p>

                                <p className="font-bold text-slate-800 dark:text-white">
                                    {formatDate(user.createdAt)}
                                </p>

                            </div>

                            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-6 transition hover:shadow-lg">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 dark:bg-slate-700">
                                    <FaUser className="text-xl text-white" />
                                </div>

                                <p className="mb-1 text-sm text-slate-500 dark:text-white">
                                    شناسه کاربری
                                </p>

                                <p className="break-all font-bold text-slate-800 dark:text-white">
                                    {user.id}
                                </p>

                            </div>

                        </div>

                        {/* Footer */}
                        <div className="mt-10 flex justify-center">

                            <Link
                                href="/"
                                className="
                            flex
                            items-center
                            gap-2
                            rounded-2xl
                            bg-teal-700
                            px-6
                            py-3
                            text-white
                            transition
                            hover:bg-teal-800
                            dark:bg-slate-600
                            dark:hover:bg-slate-800
                        "
                            >
                                <FaArrowRight />
                                بازگشت به صفحه اصلی
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ProfilePage;
