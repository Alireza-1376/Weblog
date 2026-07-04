"use client"

import { deleteCommentById } from "@/action/deleteComment";
import { CommentType } from "@/types/comment";
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import { toast } from "react-toastify";

function ActivityBtns({ comment }: { comment: CommentType }) {
    async function deleteComment(id: string) {
        const result = await deleteCommentById(id)
        toast.success(result?.data.message, { rtl: true, className: "Font-BYekan" })
    }

    return (
        <>
            <button
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-sm font-medium text-amber-600 transition-all hover:bg-amber-100"

            >
                <FiEdit2 size={16} />
                <span className="hidden sm:inline">
                    ویرایش
                </span>
            </button>

            <button
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100"
                onClick={() => { deleteComment(comment.id) }}
            >
                <FiTrash2 size={16} />
                <span className="hidden sm:inline">
                    حذف
                </span>
            </button>
        </>
    )
}

export default ActivityBtns;