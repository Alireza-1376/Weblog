import { getAllUsers } from "@/services/auth";
import UserActions from "./_components/UserActions";
import { cookies } from "next/headers";
import { JwtType } from "@/types/auth";
import { jwtDecode } from "jwt-decode";

export default async function UsersTable() {
    const cookieStore = await cookies();
    const token = cookieStore.get('LoginToken')?.value
    const users = await getAllUsers(token);
    // let userInfo;
    // if (token) {
    //     const decode: JwtType = jwtDecode(token)
    //     userInfo = decode
    // }

    // if (userInfo?.role == "admin" && userInfo.username != "علیرضا") {
    //     return (
    //         <div className="p-4 w-screen md:w-full flex justify-center items-center h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
    //             <h1 className="text-2xl font-bold text-center">شما به این صفحه دسترسی ندارید</h1>
    //         </div>
    //     )
    // }


    return (
        <div className="p-4 w-screen md:w-full h-[calc(100vh-67.2px)] md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-800">
                            مدیریت کاربران
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            مشاهده، مدیریت نقش و حذف کاربران
                        </p>
                    </div>

                    <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                        تعداد کاربران: {users.length}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-225">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    #
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    نام کاربری
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    ایمیل
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    نقش
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    تاریخ عضویت
                                </th>

                                <th className="px-4 py-4 text-center text-sm font-bold text-slate-600">
                                    عملیات
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-slate-100 transition hover:bg-slate-50"
                                >
                                    <td className="px-4 py-5 text-center text-slate-700">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-5 text-center font-semibold text-slate-800">
                                        {user.username}
                                    </td>

                                    <td className="px-4 py-5 text-center text-slate-600">
                                        {user.email}
                                    </td>

                                    <td className="px-4 py-5 text-center">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${user.role === "admin"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-blue-100 text-blue-700"
                                                }`}
                                        >
                                            {user.role === "admin"
                                                ? "ادمین"
                                                : "کاربر"}
                                        </span>
                                    </td>

                                    <td className="px-4 py-5 text-center text-slate-500">
                                        {new Date(
                                            user.createdAt
                                        ).toLocaleDateString("fa-IR")}
                                    </td>

                                    <td className="px-4 py-5 text-center">
                                        <UserActions
                                            userId={user.id}
                                            role={user.role}
                                        />
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