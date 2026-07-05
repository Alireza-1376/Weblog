"use client"

import { addComment } from "@/action/addComment";
import { useActionState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { FiMessageSquare, FiSend } from "react-icons/fi";

function FormAddComment({ articleId }: { articleId: string }) {
    const [state, action, pending] = useActionState(addComment, { message: "" })

    return (
        <div className="mb-10 rounded-2xl border border-slate-300 bg-white dark:bg-slate-600 dark:text-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-teal-50 dark:bg-slate-700 p-3">
                    <FiMessageSquare
                        size={22}
                        className="text-teal-600 dark:text-white"
                    />
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">
                        ثبت دیدگاه
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-white">
                        نظر خود را درباره این مقاله با ما به اشتراک بگذارید.
                    </p>
                </div>
            </div>

            <form action={action}>
                <div className="space-y-4">
                    <textarea
                        name="content"
                        rows={5}
                        placeholder="نظر خود را بنویسید..."
                        className="w-full resize-none rounded-xl border dark:bg-slate-500 dark:text-white border-slate-300 p-4 text-slate-700 outline-none transition-all "
                    />

                    <input
                        type="hidden"
                        name="articleId"
                        value={articleId}
                    />

                    <div className="flex justify-end">
                        {pending ? (
                            <div className="flex w-36 items-center justify-center gap-2 rounded-xl bg-teal-600/70 px-6 py-3 text-white">
                                <FaSpinner className="animate-spin" />
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="flex dark:bg-slate-700 dark:hover:bg-slate-800 cursor-pointer items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                            >
                                <FiSend size={18} />
                                ثبت نظر
                            </button>
                        )}
                    </div>

                    {state.message && (
                        <p className="text-sm text-red-500">
                            {state.message}
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default FormAddComment;