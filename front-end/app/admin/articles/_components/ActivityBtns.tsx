"use client";

import { deleteArticle } from "@/action/deleteArticle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

function ActivityBtns({
    articleId,
}: {
    articleId: string;
}) {

    const router = useRouter();

    async function handleDelete(id: string) {
        return Swal.fire({
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
                const data = await deleteArticle(id)
                if (data?.statusCode == 200) {
                    router.refresh()
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
                href={`/admin/articles/addArticle?articleId=${articleId}`}
                className="rounded-xl bg-amber-50 p-2.5 transition hover:bg-amber-100"
            >
                <FiEdit2
                    size={18}
                    className="text-amber-600"
                />
            </Link>

            <button
                onClick={() => { handleDelete(articleId) }}
                title="حذف مقاله"
                className="rounded-xl cursor-pointer bg-red-50 p-2.5 transition hover:bg-red-100"
            >
                <FiTrash2
                    size={18}
                    className="text-red-600"
                />
            </button>
        </div>
    );
}

export default ActivityBtns;