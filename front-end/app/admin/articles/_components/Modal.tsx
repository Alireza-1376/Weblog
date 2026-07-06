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

export default function Modal() {
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

            <div className="w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-600 p-6">

                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                        {search ? "ویرایش مقاله" : "ایجاد مقاله جدید"}
                    </h2>

                    <button
                        onClick={() => router.back()}
                        className="cursor-pointer rounded-xl p-2 text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-slate-600"
                    >
                        ✕
                    </button>

                </div>

                <form action={action} className="max-h-[85vh] overflow-y-auto p-6">

                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* Right Side */}
                        <div className="space-y-5">

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white">
                                    عنوان مقاله
                                </label>

                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="عنوان مقاله را وارد کنید"
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white outline-none transition focus:border-slate-600"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white">
                                    دسته‌بندی
                                </label>

                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    name="categoryId"
                                    title="دسته بندی"
                                    required
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-white outline-none transition focus:border-slate-600"
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

                                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white">
                                    محتوای مقاله
                                </label>

                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    name="content"
                                    rows={6}
                                    required
                                    placeholder="متن مقاله..."
                                    className="w-full resize-none rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-4 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white outline-none transition focus:border-slate-600"
                                />

                            </div>

                        </div>

                        {/* Left Side */}
                        <div>

                            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white">
                                تصویر مقاله
                            </label>

                            <label className="flex h-72 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 transition hover:border-slate-600">

                                <input
                                    hidden
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImage(e)}
                                />

                                {preview ? (

                                    <div className="relative h-full w-full overflow-hidden rounded-2xl">

                                        <Image
                                            src={preview}
                                            alt="preview"
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                ) : (

                                    <div className="text-center text-slate-700 dark:text-white">

                                        <div className="mb-2 text-4xl">
                                            📷
                                        </div>

                                        <p className="font-medium">
                                            انتخاب تصویر
                                        </p>

                                    </div>

                                )}

                            </label>

                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 dark:border-slate-600 pt-6 sm:flex-row sm:justify-end">

                        <button
                            onClick={() => router.back()}
                            type="button"
                            className="cursor-pointer rounded-xl border border-slate-300 dark:border-slate-600 px-6 py-3 text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            انصراف
                        </button>

                        {pending ? (

                            <div className="flex w-32 items-center justify-center rounded-xl bg-slate-600 px-6 py-3 text-white">
                                <FaSpinner className="animate-spin" />
                            </div>

                        ) : (

                            <button
                                type="submit"
                                className="cursor-pointer rounded-xl bg-teal-600 dark:bg-slate-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700 dark:hover:bg-slate-800"
                            >
                                {search ? "ثبت تغییرات" : "ایجاد مقاله"}
                            </button>

                        )}

                    </div>

                    {search && (
                        <input
                            name="articleId"
                            type="hidden"
                            value={search}
                        />
                    )}

                </form>

            </div>

        </div>

    );
}