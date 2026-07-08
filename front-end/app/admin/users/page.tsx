import { getAllUsers } from "@/services/auth";
import UserActions from "./_components/UserActions";
import { cookies } from "next/headers";
import { JwtType } from "@/types/auth";
import { jwtDecode } from "jwt-decode";

export default async function UsersTable() {
    const cookieStore = await cookies();
    const token = cookieStore.get('LoginToken')?.value
    const users = await getAllUsers(token);

    const sortUsers = [...users].sort((a, b) => {
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

    return (
        <div className="w-screen md:w-full md:col-span-8 lg:col-span-9 xl:col-span-10 h-[calc(100vh-67.2px)] overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-slate-800 p-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-6 shadow-md">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>

                        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-800 dark:text-white">
                            مدیریت کاربران
                        </h1>

                        <p className="mt-2 text-sm text-slate-500 dark:text-white">
                            مشاهده، مدیریت نقش و حذف کاربران
                        </p>

                    </div>

                    <div className="rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-white">
                        تعداد کاربران: {users.length}
                    </div>

                </div>

                {/* Table */}
                <div className="overflow-x-auto scrollbar-thin">

                    <table className="min-w-225 w-full">

                        <thead>

                            <tr className="border-b border-slate-200 dark:border-slate-600">

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    #
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    نام کاربری
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    ایمیل
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    نقش
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    تاریخ عضویت
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600 dark:text-white">
                                    عملیات
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {sortUsers.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-slate-100 dark:border-slate-600 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                                >

                                    <td className="px-4 py-5 text-center text-slate-700 dark:text-white">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-5 text-center font-semibold text-slate-800 dark:text-white">
                                        {user.username}
                                    </td>

                                    <td className="px-4 py-5 text-center text-slate-600 dark:text-white">
                                        {user.email}
                                    </td>

                                    <td className="px-4 py-5 text-center">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${user.role === "admin"
                                                    ? "bg-teal-600 text-white dark:bg-slate-600"
                                                    : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-white"
                                                }`}
                                        >
                                            {user.role === "admin" ? "ادمین" : "کاربر"}
                                        </span>

                                    </td>

                                    <td className="px-4 py-5 text-center text-slate-500 dark:text-white">
                                        {new Date(user.createdAt).toLocaleDateString("fa-IR")}
                                    </td>

                                    <td className="px-4 py-5 text-center">
                                        <UserActions userId={user.id} role={user.role} />
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );
}