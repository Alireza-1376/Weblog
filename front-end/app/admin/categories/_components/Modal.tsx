"use client"
import { addCategory } from "@/action/addCategory";
import { getOneCategory } from "@/services/categories";
import { CategoriesType } from "@/types/categories";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiFileText, FiSave, FiTag } from "react-icons/fi";
import { toast } from "react-toastify";

function Modal() {
    const [state, action, pending] = useActionState(addCategory, { message: "", statusCode: 0 })
    const [editCategory, setEditCategory] = useState<CategoriesType>();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('categoryId')

    useEffect(() => {
        async function getCategory() {
            if (categoryId) {
                const category = await getOneCategory(categoryId)
                setEditCategory(category)
                setTitle(category.title)
                setDescription(category.description)
            }

            setLoading(false)
        }
        getCategory()
    }, [])

    useEffect(() => {
        if (state.statusCode == 201) {
            router.back();
            toast.success("دسته بندی با موفقیت اضافه شد", { rtl: true, className: "Font-BYekan" })
        }
        if (state.statusCode == 200) {
            router.back();
            toast.success("دسته بندی با موفقیت ویرایش شد", { rtl: true, className: "Font-BYekan" })
        }
    }, [state.statusCode])


    if (loading) {
        return (
            <>
                <div className="fixed inset-0 bg-black/40 z-30"></div>
                <div className="fixed inset-0 top-1/2 -translate-x-1/2 text-white z-40">
                    <FaSpinner className="animate-spin" size={40} />
                </div>
            </>
        )
    }

    return (
        <div>

            <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"></div>

            <div className="fixed top-1/2 right-1/2 z-40 -translate-y-1/2 translate-x-1/2">

                <div className="mx-auto w-75 sm:w-100">

                    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-xl">

                        {/* Header */}
                        <div className="bg-teal-600 dark:bg-slate-600 p-6">

                            <h1 className="text-2xl font-extrabold text-white">
                                {editCategory ? "ویرایش دسته بندی" : "افزودن دسته‌بندی جدید"}
                            </h1>

                            <p className="mt-2 text-sm text-white">
                                اطلاعات دسته‌بندی را وارد کنید.
                            </p>

                        </div>

                        {/* Form */}
                        <form action={action} className="space-y-6 p-6 md:p-8">

                            {/* Title */}
                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white">
                                    <FiTag />
                                    عنوان دسته‌بندی
                                </label>

                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    name="title"
                                    placeholder="عنوان را وارد کنید"
                                    className="w-full rounded-2xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white outline-none transition focus:border-slate-600 dark:focus:border-slate-600"
                                />

                                {editCategory && (
                                    <input
                                        type="hidden"
                                        name="editCategory"
                                        value={editCategory.id}
                                    />
                                )}

                            </div>

                            {/* Description */}
                            <div>

                                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white">
                                    <FiFileText />
                                    توضیحات
                                </label>

                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={5}
                                    name="description"
                                    placeholder="توضیحات مربوط به این دسته‌بندی..."
                                    className="w-full resize-none rounded-2xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white outline-none transition focus:border-slate-600 dark:focus:border-slate-600"
                                />

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">

                                <button
                                    onClick={() => router.back()}
                                    type="button"
                                    className="rounded-2xl border border-slate-300 dark:border-slate-600 px-6 py-3 font-medium text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    انصراف
                                </button>

                                {pending ? (
                                    <div className="flex w-32 items-center justify-center rounded-2xl bg-slate-600 px-6 py-3 text-white">
                                        <FaSpinner className="animate-spin" />
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 rounded-2xl bg-teal-600 dark:bg-slate-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700 dark:hover:bg-slate-800"
                                    >
                                        {editCategory ? (
                                            "ثبت تغییرات"
                                        ) : (
                                            <>
                                                <FiSave size={18} />
                                                ذخیره دسته‌بندی
                                            </>
                                        )}
                                    </button>
                                )}

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Modal;