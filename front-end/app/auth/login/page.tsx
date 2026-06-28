'use client';

import { loginUser } from '@/services/auth';
import { Login } from '@/types/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const route = useRouter();

    const initialValue = {
        username: "",
        password: ""
    }
    const validationSchema = yup.object({
        username: yup.string().required("لطفا نام کاربری را وارد کنید").min(3, "حداقل 3 کاراکتر باید وارد کنید"),
        password: yup.string().required("لطفا رمزعبور را وارد کنید").min(5, "حداقل 5 کاراکتر باید وارد کنید")
    })

    const onSubmit = async (values: Login) => {
        const result = await loginUser(values);
        if (result.token) {
            toast.success(result.message, { rtl: true, className: "Font-BYekan" })
            document.cookie = `LoginToken=${result.token};path=/;max-age=${7 * 24 * 60 * 60}`
            route.push('/')
        } else {
            toast.error(result.message, { rtl: true, className: "Font-BYekan" })
        }
    }


    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValue}
            validationSchema={validationSchema}
        >
            <main className="h-screen w-screen bg-linear-to-br  from-teal-600 to-teal-600 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-white">
                                ورود به حساب
                            </h1>

                            <p className="mt-2 text-white/80">
                                اطلاعات خود را وارد کنید
                            </p>
                        </div>

                        {/* Form */}
                        <Form className="space-y-5">
                            <div>
                                <label className="mb-2 block text-sm text-white">
                                    نام کاربری
                                </label>

                                <Field
                                    type="text"
                                    placeholder="نام کاربری"
                                    name='username'
                                    className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/40"
                                />
                                <ErrorMessage name="username">
                                    {(props) => {
                                        return <p className='text-sm text-red-700 pt-1'>{props}</p>
                                    }}
                                </ErrorMessage>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-white">
                                    رمز عبور
                                </label>

                                <div className="relative">
                                    <Field
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="رمز عبور"
                                        name="password"
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

                            <button
                                type="submit"
                                className="w-full cursor-pointer rounded-xl bg-white py-3 font-semibold text-purple-700 transition hover:scale-[1.02] hover:bg-slate-100 active:scale-[0.98]"
                            >
                                ورود
                            </button>
                        </Form>

                        {/* Register Link */}
                        <div className="mt-6 flex flex-col gap-3 text-center">
                            <div className="text-white">
                                حساب کاربری ندارید؟{' '}
                                <Link
                                    href="/auth/register"
                                    className="font-bold text-yellow-300 transition hover:text-yellow-200"
                                >
                                    ثبت نام
                                </Link>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white transition hover:bg-white/20"
                            >
                                ← بازگشت به صفحه اصلی
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Formik>
    );
}