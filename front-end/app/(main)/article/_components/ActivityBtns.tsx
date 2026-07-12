"use client"

import { deleteCommentById } from "@/action/deleteComment";
import { updateComment } from "@/action/updateComment";
import { CommentType } from "@/types/comment";
import { useActionState, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

function ActivityBtns({ comment }: { comment: CommentType }) {
    const [isOpen, setIsOpen] = useState(false);
    const [state, action, pending] = useActionState(updateComment, { statusCode: 0 });

    useEffect(() => {
        if (state.statusCode == 200) {
            setIsOpen(false)
            toast.success("نظر با موفقیت ویرایش شد", { rtl: true, className: "Font-BYekan" })
        }
    }, [state])

    async function deleteComment(id: string) {
        const result = await deleteCommentById(id)
        toast.success(result?.data.message, { rtl: true, className: "Font-BYekan" })
    }

    return (
        <div>
            <div className="flex gap-2">
                <button
                    onClick={() => { setIsOpen(true) }}
                    type="button"
                    className="dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700 flex cursor-pointer items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-sm font-medium text-amber-600 transition-all hover:bg-amber-100"

                >
                    <FiEdit2 size={16} />
                    <span className="hidden sm:inline">
                        ویرایش
                    </span>
                </button>

                <button
                    type="button"
                    className="dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700 flex cursor-pointer items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100"
                    onClick={() => { deleteComment(comment.id) }}
                >
                    <FiTrash2 size={16} />
                    <span className="hidden sm:inline">
                        حذف
                    </span>
                </button>
            </div>
            {/* update comment */}
            {isOpen &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-slate-600 shadow-2xl">
                        {/* Header */}
                        <div className="border-b border-slate-200 bg-teal-600 p-6 text-white dark:bg-slate-600">
                            <h2 className="text-2xl font-bold">
                                ویرایش نظر
                            </h2>

                            <p className="mt-2 text-sm text-teal-100">
                                متن نظر خود را ویرایش کرده و تغییرات را ذخیره کنید.
                            </p>
                        </div>

                        {/* Form */}
                        <form action={action} className="p-6">
                            <div>
                                <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-white">
                                    متن نظر
                                </label>

                                <textarea
                                    name="content"
                                    rows={6}
                                    defaultValue={comment.content}
                                    placeholder="نظر خود را بنویسید..."
                                    className="w-full resize-none rounded-2xl border border-slate-300 dark:text-white dark:bg-slate-500 bg-slate-50 p-4 text-slate-700 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
                                />
                                <input type="hidden" name="commentId" value={comment.id} />
                            </div>

                            {/* Footer */}
                            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                <button
                                    onClick={() => { setIsOpen(false) }}
                                    type="button"
                                    className="rounded-2xl dark:text-white dark:hover:bg-slate-700 cursor-pointer border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                                >
                                    انصراف
                                </button>

                                {pending ?
                                    <div className="rounded-2xl bg-teal-600 w-36 flex items-center justify-center px-6 py-3 font-medium text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200">
                                        <FaSpinner className="animate-spin" />
                                    </div>
                                    :
                                    <button
                                        type="submit"
                                        className="rounded-2xl dark:bg-slate-600 dark:border dark:text-white dark:hover:bg-slate-700  cursor-pointer w-36 bg-teal-600 px-6 py-3 font-medium text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                                    >
                                        ذخیره تغییرات
                                    </button>

                                }

                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default ActivityBtns;