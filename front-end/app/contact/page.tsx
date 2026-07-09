import Link from "next/link";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiSend,
} from "react-icons/fi";

export default function ContactPage() {
    return (
        <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
            {/* Hero */}
            <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="rounded-full bg-teal-50 px-5 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30">
                            ارتباط با ما
                        </span>

                        <h1 className="mt-8 text-4xl text-teal-600 font-extrabold dark:text-white md:text-5xl">
                            خوشحال می‌شویم صدای شما را بشنویم
                        </h1>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                            اگر سوال، پیشنهاد یا انتقادی دارید، از طریق
                            راه‌های ارتباطی زیر با ما در تماس باشید.
                            تلاش می‌کنیم در کوتاه‌ترین زمان ممکن پاسخگوی
                            شما باشیم.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Info */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="rounded-2xl bg-teal-50 p-3 dark:bg-teal-900/30">
                                    <FiPhone
                                        size={24}
                                        className="text-teal-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">
                                        شماره تماس
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400">
                                        09120000000
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="rounded-2xl bg-teal-50 p-3 dark:bg-teal-900/30">
                                    <FiMail
                                        size={24}
                                        className="text-teal-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">
                                        ایمیل
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400">
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="rounded-2xl bg-teal-50 p-3 dark:bg-teal-900/30">
                                    <FiMapPin
                                        size={24}
                                        className="text-teal-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">
                                        آدرس
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400">
                                        تهران، خیابان آزادی، پلاک ۱۲۳
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="rounded-2xl bg-teal-50 p-3 dark:bg-teal-900/30">
                                    <FiClock
                                        size={24}
                                        className="text-teal-600"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">
                                        ساعات پاسخگویی
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400">
                                         شنبه تا پنجشنبه ، ۹ صبح تا ۶ عصر
                                    </p>

                                    <p className="text-slate-500 dark:text-slate-400">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">
                                ارسال پیام
                            </h2>
                            <form className="space-y-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <input
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                        className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />

                                    <input
                                        type="email"
                                        placeholder="ایمیل"
                                        className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="موضوع پیام"
                                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                />

                                <textarea
                                    rows={7}
                                    placeholder="متن پیام..."
                                    className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                                />

                                <button
                                    type="submit"
                                    className="flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                                >
                                    <FiSend />
                                    ارسال پیام
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Card */}
            <section className="mx-auto max-w-7xl px-4 pb-20">
                <div className="rounded-3xl bg-teal-600 p-8 text-center text-white shadow-xl">
                    <h2 className="text-3xl font-extrabold">
                        علیرضا حبیبی
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto leading-8 text-teal-50">
                        توسعه‌دهنده وب و نویسنده مقالات آموزشی در حوزه
                        برنامه‌نویسی. هدف من انتشار محتوای کاربردی و
                        باکیفیت برای یادگیری بهتر برنامه‌نویسی است.
                    </p>

                    <Link
                        href="/"
                        className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-bold text-teal-700 transition hover:scale-105"
                    >
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </section>
        </main>
    );
}