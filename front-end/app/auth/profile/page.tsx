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
        <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-teal-50 flex items-center justify-center p-4">

            <div className="w-full max-w-5xl">

                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl overflow-hidden border border-white">

                    {/* Header */}
                    <div className="relative h-44 bg-linear-to-br from-teal-700 via-teal-600 to-cyan-500">

                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-300 rounded-full blur-3xl" />
                        </div>

                        {/* Avatar */}
                        <div className="absolute -bottom-16 right-10">
                            <div className="w-28 h-28 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                                <FaUser className="text-5xl text-teal-700" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="pt-20 px-6 md:px-10 pb-10">

                        {/* User Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            <div>

                                <div className="flex items-center gap-3 mb-3">

                                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                                        {user.username}
                                    </h1>

                                    {user.role === "admin" && (
                                        <MdVerified className="text-3xl text-teal-600" />
                                    )}
                                </div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${user.role === "admin"
                                            ? "bg-teal-100 text-teal-700"
                                            : "bg-slate-100 text-slate-600"
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
                            flex items-center gap-2
                            bg-slate-900
                            text-white
                            px-6 py-3
                            rounded-2xl
                            hover:scale-105
                            transition-all
                            duration-300
                            shadow-lg
                            cursor-pointer
                        "
                            >
                                <FaEdit />
                                ویرایش پروفایل
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-slate-200" />

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                            {/* Email */}
                            <div className="group bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-6 transition-all hover:shadow-lg">

                                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-4">
                                    <FaEnvelope className="text-teal-700 text-xl" />
                                </div>

                                <p className="text-sm text-slate-500 mb-1">
                                    ایمیل
                                </p>

                                <p className="font-bold text-slate-800 break-all">
                                    {user.email}
                                </p>
                            </div>

                            {/* Created At */}
                            <div className="group bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-6 transition-all hover:shadow-lg">

                                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-4">
                                    <FaCalendarAlt className="text-cyan-700 text-xl" />
                                </div>

                                <p className="text-sm text-slate-500 mb-1">
                                    تاریخ عضویت
                                </p>

                                <p className="font-bold text-slate-800">
                                    {formatDate(user.createdAt)}
                                </p>
                            </div>

                            {/* User Id */}
                            <div className="group bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-6 transition-all hover:shadow-lg">

                                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-4">
                                    <FaUser className="text-violet-700 text-xl" />
                                </div>

                                <p className="text-sm text-slate-500 mb-1">
                                    شناسه کاربری
                                </p>

                                <p className="font-bold text-slate-700 break-all">
                                    {user.id}
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-center mt-10">

                            <Link
                                href="/"
                                className="
                            flex items-center gap-2
                            px-6 py-3
                            rounded-2xl
                            bg-teal-600
                            text-white
                            font-medium
                            hover:bg-teal-700
                            transition
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
