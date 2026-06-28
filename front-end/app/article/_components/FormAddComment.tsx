"use client"

import { addComment } from "@/action/addComment";
import { useActionState } from "react";
import { FaSpinner } from "react-icons/fa6";

function FormAddComment({ articleId }: { articleId: string }) {
    const [state, action, pending] = useActionState(addComment, { message: "" })

    return (
        <form
            action={action}
            className="border rounded-2xl p-6 mb-10"
        >
            <div className="space-y-4">
                <textarea
                    name="content"
                    rows={5}
                    placeholder="نظر خود را بنویسید..."
                    className="w-full border rounded-lg p-3 outline-none resize-none"
                />
                <input type="hidden" name="articleId" value={articleId} />

                {pending ?
                    <div className="bg-teal-700/50 flex justify-center w-32 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition">
                        <FaSpinner className="animate-spin"/>
                    </div>
                    :
                    <button type="submit" className="bg-teal-700 w-32 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition">
                        ثبت نظر
                    </button>
                }
            </div>
        </form>
    )
}

export default FormAddComment;