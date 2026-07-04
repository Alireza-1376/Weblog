import { CommentType } from "@/types/comment";
import { cookies } from "next/headers";
import FormAddComment from "./FormAddComment";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";
import { JwtType } from "@/types/auth";
import ActivityBtns from "./ActivityBtns";


async function Comment({ comments, articleId }: { comments: CommentType[], articleId: string }) {
    const cookie = await cookies();
    const token = cookie.get("LoginToken")?.value;
    let userInfo: JwtType | null = null;
    if (token) {
        const decode: JwtType = jwtDecode(token)
        userInfo = decode
    }

    

    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
                نظرات کاربران
            </h2>

            {token ?
                <FormAddComment articleId={articleId} />
                :
                <h3 className="mb-10">برای ارسال نظر لطفا وارد شوید</h3>
            }

            <div className="space-y-5">

                {comments.map((comment, index) => (

                    <div
                        key={comment.id}
                        className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                    >
                        {/* Header */}
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h4 className="font-bold text-slate-800">
                                    {comment.author}
                                </h4>

                                <span className="text-xs text-slate-500">
                                    {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                {(comment.author == userInfo?.username || userInfo?.role === "admin") &&
                                   <ActivityBtns comment={comment}/>
                                }
                            </div>
                        </div>

                        {/* Content */}
                        <p className="leading-8 text-slate-600">
                            {comment.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comment;