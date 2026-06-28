import { CommentType } from "@/types/comment";
import { cookies } from "next/headers";
import FormAddComment from "./FormAddComment";


async function Comment({ comments , articleId }: { comments: CommentType[] , articleId:string }) {

    const cookie = await cookies();
    const token = cookie.get("LoginToken");
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
                نظرات کاربران
            </h2>

            {token ?
                <FormAddComment articleId={articleId}/>
                :
                <h3 className="mb-10">برای ارسال نظر لطفا وارد شوید</h3>
            }



            <div className="space-y-5">

                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-5"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold">
                                {comment.author}
                            </h4>

                            <span className="text-xs text-gray-500">
                                {new Date(
                                    comment.createdAt
                                ).toLocaleDateString("fa-IR")}
                            </span>
                        </div>

                        <p className="text-gray-600 leading-8">
                            {comment.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comment;