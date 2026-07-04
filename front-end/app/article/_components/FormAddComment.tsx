"use client"

import { addComment } from "@/action/addComment";
import { useActionState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { FiMessageSquare, FiSend } from "react-icons/fi";

function FormAddComment({ articleId }: { articleId: string }) {
    const [state, action, pending] = useActionState(addComment, { message: "" })

    return (
        <div className="mb-10 rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-teal-50 p-3">
                    <FiMessageSquare
                        size={22}
                        className="text-teal-600"
                    />
                </div>

                <div>
                    <h3 className="font-bold text-slate-800">
                        ثبت دیدگاه
                    </h3>

                    <p className="text-sm text-slate-500">
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
                        className="w-full resize-none rounded-xl border border-slate-300 p-4 text-slate-700 outline-none transition-all focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
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
                                className="flex cursor-pointer items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
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