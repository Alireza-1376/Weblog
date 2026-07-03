"use client";

import { addArticle } from "@/action/addArticle";
import { getOneArticle } from "@/services/blogs";
import { getAllCategories } from "@/services/categories";
import { CategoriesType } from "@/types/categories";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CreatePostModal() {
    const router = useRouter();
    const [preview, setPreview] = useState<string>(null!);
    const [categories, setCategories] = useState<CategoriesType[]>(null!);
    const [state, action, pending] = useActionState(addArticle, { message: "", statusCode: 0 })
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const searchParams = useSearchParams()
    const search = searchParams.get('articleId')

    useEffect(() => {
        async function getArticleForEdit() {
            if (search) {
                const article = await getOneArticle(search)
                setTitle(article.title)
                setContent(article.content)
                setCategory(article.categoryId)
            }
        }
        getArticleForEdit()

        async function getCategories() {
            const categories = await getAllCategories();
            setCategories(categories)
        }
        getCategories()
    }, [])

    useEffect(() => {
        if (state.statusCode == 201) {
            router.back();
            toast.success("مقاله با موفقیت افزوده شد", { rtl: true, className: "Font-BYekan" })
        }
        if (state.statusCode == 200) {
            router.back();
            toast.success("مقاله با موفقیت ویرایش شد", { rtl: true, className: "Font-BYekan" })
        }
    }, [state.statusCode])

    function handleImage(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 p-6 dark:border-zinc-800">
                    <h2 className="text-xl font-bold">
                        {search ? "ویرایش مقاله" : "ایجاد مقاله جدید"}
                    </h2>

                    <button
                        onClick={() => { router.back() }}
                        className="rounded-lg cursor-pointer p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        ✕
                    </button>
                </div>

                <form action={action} className="max-h-[85vh] overflow-y-auto p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Right Side */}
                        <div className="space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    عنوان مقاله
                                </label>

                                <input
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    value={title}
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="عنوان مقاله را وارد کنید"
                                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-teal-500 dark:border-zinc-700 dark:bg-zinc-800"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    دسته‌بندی
                                </label>

                                <select
                                    onChange={(e) => { setCategory(e.target.value) }}
                                    value={category}
                                    name="categoryId"
                                    title="دسته بندی"
                                    required
                                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-teal-500 dark:border-zinc-700 dark:bg-zinc-800"
                                >
                                    <option value="">
                                        انتخاب دسته‌بندی
                                    </option>

                                    {categories?.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    محتوای مقاله
                                </label>

                                <textarea
                                    onChange={(e) => { setContent(e.target.value) }}
                                    value={content}
                                    name="content"
                                    required
                                    rows={6}
                                    placeholder="متن مقاله..."
                                    className="w-full resize-none rounded-xl border border-zinc-300 p-4 outline-none transition focus:border-teal-500 dark:border-zinc-700 dark:bg-zinc-800"
                                />
                            </div>
                        </div>
                        {/* Left Side */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                تصویر مقاله
                            </label>

                            <label className="flex h-72 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 transition hover:border-teal-500 dark:border-zinc-700">
                                <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => { handleImage(e) }}
                                />

                                {preview ?
                                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                        {preview &&
                                            <Image
                                                src={preview}
                                                alt="preview"
                                                fill
                                                className="object-cover"
                                            />
                                        }
                                    </div>

                                    :
                                    <div className="text-center">
                                        <div className="mb-2 text-4xl">
                                            📷
                                        </div>
                                        <p className="font-medium">
                                            انتخاب تصویر
                                        </p>
                                    </div>

                                }




                            </label>
                        </div>
                    </div>

                    {/* Footer */}


                    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:justify-end dark:border-zinc-800">
                        <button
                            onClick={() => { router.back() }}
                            type="button"
                            className="rounded-xl cursor-pointer border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                        >
                            انصراف
                        </button>

                        {pending ?
                            <div className="bg-teal-700/50 flex items-center justify-center w-32 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition">
                                <FaSpinner className="animate-spin" />
                            </div>
                            :
                            <button
                                type="submit"
                                className="rounded-xl cursor-pointer bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
                            >
                                {search ? "ثبت تغییرات" : " ایجاد مقاله"}
                            </button>
                        }
                    </div>
                    {search && <input name="articleId" type="hidden" value={search} />}


                </form>
            </div>
        </div>
    );
}