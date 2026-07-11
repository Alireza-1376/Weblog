"use client"
import { deleteCategory } from "@/action/deleteCategory";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

function ActivityBtns({ categoryId }: { categoryId: string }) {
    const router = useRouter();

    function handleDelete(id: string) {
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
                const result = await deleteCategory(id)
                if (result?.statusCode == 200) {
                    router.refresh();
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


    return (
        <div className="flex items-center justify-center gap-2">
            <Link
                className="group cursor-pointer rounded-xl bg-amber-50 p-2.5 transition hover:bg-amber-100"
                title="ویرایش"
                href={{ pathname: "/admin/categories/addCategory", query: { categoryId } }}
            >
                <FiEdit2
                    size={18}
                    className="text-amber-600"
                />
            </Link>

            <button
                className="group rounded-xl cursor-pointer bg-red-50 p-2.5 transition hover:bg-red-100"
                title="حذف"
                onClick={() => { handleDelete(categoryId) }}
            >
                <FiTrash2
                    size={18}
                    className="text-red-600"
                />
            </button>
        </div>
    )
}

export default ActivityBtns;