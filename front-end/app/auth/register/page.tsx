'use client';

import { registerUser } from '@/services/auth';
import { Register } from '@/types/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const initialValue = {
        username: "",
        email: "",
        password: ""
    }
    const validationSchema = yup.object({
        username: yup.string().required("لطفا نام کاربری را وارد کنید").min(3, "حداقل 3 کاراکتر باید وارد کنید"),
        email: yup.string().email("ایمیل وارد شده نامعتبر است").required("لطفا ایمیل را وارد کنید"),
        password: yup.string().required("لطفا رمزعبور را وارد کنید").min(5, "حداقل 5 کاراکتر باید وارد کنید")
    })

    const onSubmit = async (values: Register) => {
        const register = await registerUser(values)
        console.log(register)
        if (register.statusCode == 400) {
            toast.error(register.data.message, { rtl: true, className: "Font-BYekan" })
        } else {
            toast.success(register.data.message, { rtl: true, className: "Font-BYekan" })
            router.push("/auth/login")
        }
    }

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <main className="h-screen w-screen flex items-center justify-center bg-linear-to-br from-teal-600 to-teal-600 p-4 overflow-y-auto">
                <div className="w-full max-w-md">
                    <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8 py-6">

                        {/* Header */}
                        <div className="mb-8 text-center">
                            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18 9v6m-3-3h6M8 7a4 4 0 100 8 4 4 0 000-8zm0 10c-3.314 0-6 1.343-6 3v1h12v-1c0-1.657-2.686-3-6-3z"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-white">
                                ایجاد حساب کاربری
                            </h1>

                            <p className="mt-2 text-white/80">
                                اطلاعات خود را برای ثبت نام وارد کنید
                            </p>
                        </div>

                        {/* Form */}
                        <Form className="space-y-5">

                            {/* Username */}
                            <div>
                                <label className="mb-2 block text-sm text-white">
                                    نام کاربری
                                </label>

                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="نام کاربری"
                                    className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/40"
                                />
                                <ErrorMessage name="username">
                                    {(props) => {
                                        return <p className='text-sm text-red-700 pt-1'>{props}</p>
                                    }}
                                </ErrorMessage>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm text-white">
                                    ایمیل
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/40"
                                />
                                <ErrorMessage name="email">
                                    {(props) => {
                                        return <p className='text-sm text-red-700 pt-1'>{props}</p>
                                    }}
                                </ErrorMessage>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="mb-2 block text-sm text-white">
                                    رمز عبور
                                </label>

                                <div className="relative">
                                    <Field
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="رمز عبور"
                                        className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/40"
                                    />
                                    <ErrorMessage name="password">
                                        {(props) => {
                                            return <p className='text-sm text-red-700 pt-1'>{props}</p>
                                        }}
                                    </ErrorMessage>

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full cursor-pointer rounded-xl bg-white py-3 font-semibold text-purple-700 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100 active:scale-[0.98]"
                            >
                                ثبت نام
                            </button>
                        </Form>

                        {/* Footer Links */}
                        <div className="mt-6 flex flex-col gap-3 text-center">

                            <div className="text-white">
                                قبلاً ثبت نام کرده‌اید؟{' '}
                                <Link
                                    href="/auth/login"
                                    className="font-bold text-yellow-300 transition hover:text-yellow-200"
                                >
                                    ورود
                                </Link>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>

                                بازگشت به صفحه اصلی
                            </Link>

                        </div>
                    </div>
                </div>
            </main>
        </Formik>
    );
}