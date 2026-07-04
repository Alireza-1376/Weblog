"use client";

import { changeRole } from "@/action/changeUserRole";
import { deleteUser } from "@/action/deleteUser";
import { FiShield, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

type Props = {
    userId: string;
    role: string;
};

export default function UserActions({
    userId,
    role,
}: Props) {


    async function handleDelete(id: string) {
        Swal.fire({
            title: "حذف !",
            text: "آیا مطمئن هستید ؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله",
            cancelButtonText: "انصراف"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteUser(id)
                if (result?.statusCode == 200) {
                    Swal.fire({
                        title: "حذف !",
                        text: "عملیات با موفقیت انجام شد",
                        icon: "success"
                    })
                }
            } else {
                Swal.fire({
                    title: "حذف !",
                    text: "عملیات ناموفق",
                    icon: "error"
                })
            }
        });

    }

    async function handleRoleChange(id: string, role: string) {
        const result = await changeRole(id, role)
        toast.success(result?.data.message, { rtl: true, className: "Font-BYekan" })
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={() => handleRoleChange(userId, role)}
                className={`${role == "admin" ? "hover:bg-teal-200 bg-teal-100" : "hover:bg-indigo-100 bg-indigo-50"} group rounded-xl p-2.5 transition  cursor-pointer`}
                title="تغییر نقش"
            >
                <FiShield
                    size={18}
                    className={`${role == "admin" ? "text-teal-600" : "text-indigo-600"}`}
                />
            </button>

            <button
                onClick={() => handleDelete(userId)}
                className="group rounded-xl bg-red-50 p-2.5 transition hover:bg-red-100 cursor-pointer"
                title="حذف کاربر"
            >
                <FiTrash2
                    size={18}
                    className="text-red-600"
                />
            </button>
        </div>
    );
}