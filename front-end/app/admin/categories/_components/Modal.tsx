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
            <div className="fixed inset-0 bg-black/40 z-30"></div>
            <div className="fixed z-30 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <div className="mx-auto w-75 sm:w-100">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
                        {/* Header */}
                        <div className=" bg-teal-600 p-6 text-white">
                            <h1 className="text-2xl font-extrabold">

                                {editCategory ? "ویرایش دسته بندی" : "افزودن دسته‌بندی جدید"}
                            </h1>

                            <p className="mt-2 text-sm text-indigo-100">
                                اطلاعات دسته‌بندی جدید را وارد کنید.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            action={action}
                            className="space-y-6 p-6 md:p-8"
                        >
                            {/* Title */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <FiTag />
                                    عنوان دسته‌بندی
                                </label>

                                <input
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    type="text"
                                    name="title"
                                    placeholder="عنوان را وارد کنید"
                                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                                />
                                {editCategory && <input type="hidden" name="editCategory" value={editCategory.id} />}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <FiFileText />
                                    توضیحات
                                </label>

                                <textarea
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    rows={5}
                                    name="description"
                                    placeholder="توضیحات مربوط به این دسته‌بندی..."
                                    className=" w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3  outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
                                <button
                                    onClick={() => { router.back() }}
                                    type="button"
                                    className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
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
                                        className="flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-200"
                                    >
                                        {editCategory ? "ثبت تغییرات" :
                                            <div className="flex items-center gap-2">
                                                <FiSave size={18} />
                                                ذخیره دسته‌بندی
                                            </div>
                                        }
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;