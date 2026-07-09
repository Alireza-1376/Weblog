import Image from "next/image";
import Link from "next/link";
import {
    FiBookOpen,
    FiUsers,
    FiTarget,
    FiAward,
    FiTrendingUp,
    FiArrowLeft,
    FiMail,
    FiLayers,
} from "react-icons/fi";

export default function AboutPage() {
    const stats = [
        {
            title: "مقاله منتشر شده",
            value: "+250",
            icon: FiBookOpen,
        },
        {
            title: "بازدید ماهانه",
            value: "+15K",
            icon: FiUsers,
        },
        {
            title: "موضوع تخصصی",
            value: "20",
            icon: FiLayers,
        },
        {
            title: "سال فعالیت",
            value: "3",
            icon: FiAward,
        },
    ];

    const features = [
        {
            title: "مقالات تخصصی",
            desc: "انتشار مقالات عمیق و کاربردی در حوزه برنامه‌نویسی و توسعه وب.",
        },
        {
            title: "محتوای به‌روز",
            desc: "بررسی فناوری‌ها و ابزارهای جدید دنیای برنامه‌نویسی.",
        },
        {
            title: "تحلیل و بررسی",
            desc: "مقایسه فریمورک‌ها، کتابخانه‌ها و تکنولوژی‌های مختلف.",
        },
        {
            title: "انتقال تجربه",
            desc: "اشتراک تجربه‌های واقعی از توسعه پروژه‌های نرم‌افزاری.",
        },
        {
            title: "دسته‌بندی منظم",
            desc: "دسترسی سریع به مقالات بر اساس موضوعات تخصصی.",
        },
        {
            title: "جامعه توسعه‌دهندگان",
            desc: "محیطی برای یادگیری، تبادل نظر و رشد حرفه‌ای برنامه‌نویسان.",
        },
    ];

    return (
        <main className="bg-slate-50 dark:bg-slate-900">
            {/* Hero */}
            <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="rounded-full bg-teal-50 px-5 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30">
                            درباره وبلاگ
                        </span>

                        <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-800 dark:text-white md:text-6xl">
                            مرجع مقالات
                            <span className="block text-teal-600">
                                برنامه‌نویسی و توسعه وب
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-300">
                            این وبلاگ با هدف انتشار مقالات تخصصی در زمینه
                            برنامه‌نویسی، توسعه وب و فناوری‌های روز دنیا ایجاد
                            شده است. تلاش می‌کنیم مفاهیم فنی را به زبان ساده و
                            کاربردی ارائه کنیم تا یادگیری و دنبال کردن دنیای
                            تکنولوژی برای همه آسان‌تر باشد.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/"
                                className="rounded-2xl bg-teal-600 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-teal-700"
                            >
                                مشاهده مقالات
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            >
                                ارتباط با ما
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-500 dark:text-slate-400">
                                            {item.title}
                                        </p>

                                        <h3 className="mt-3 text-3xl font-extrabold text-slate-800 dark:text-white">
                                            {item.value}
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl bg-teal-50 p-4 dark:bg-teal-900/30">
                                        <Icon
                                            size={30}
                                            className="text-teal-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mx-auto max-w-7xl px-4 pb-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                        <div className="mb-5 flex items-center gap-3">
                            <FiTarget className="text-teal-600" size={24} />
                            <h2 className="text-2xl font-bold dark:text-white">
                                ماموریت ما
                            </h2>
                        </div>

                        <p className="leading-8 text-slate-600 dark:text-slate-300">
                            تولید و انتشار مقالات باکیفیت در زمینه
                            برنامه‌نویسی و توسعه نرم‌افزار، به‌گونه‌ای که
                            برنامه‌نویسان بتوانند دانش خود را به‌روز نگه دارند
                            و با فناوری‌های جدید آشنا شوند.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                        <div className="mb-5 flex items-center gap-3">
                            <FiTrendingUp
                                className="text-teal-600"
                                size={24}
                            />

                            <h2 className="text-2xl font-bold dark:text-white">
                                چشم‌انداز ما
                            </h2>
                        </div>

                        <p className="leading-8 text-slate-600 dark:text-slate-300">
                            تبدیل شدن به یکی از مراجع معتبر فارسی برای مطالعه
                            مقالات برنامه‌نویسی، توسعه وب و فناوری‌های نوین.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-7xl px-4 pb-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold dark:text-white">
                        آنچه در وبلاگ ما پیدا می‌کنید
                    </h2>

                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                        محتوایی که برای توسعه‌دهندگان ارزشمند است
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                        >
                            <h3 className="mb-3 text-lg font-bold dark:text-white">
                                {feature.title}
                            </h3>

                            <p className="leading-8 text-slate-600 dark:text-slate-300">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Author */}
            <section className="mx-auto max-w-7xl px-4 pb-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h2 className="mb-6 text-3xl font-extrabold dark:text-white">
                        درباره نویسنده
                    </h2>

                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-700">
                        <Image
                            src="/images/alireza.jpg"
                            alt="alireza"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>

                    <h3 className="text-xl font-bold dark:text-white">
                        علیرضا حبیبی
                    </h3>

                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                        نویسنده و توسعه‌دهنده وب
                    </p>

                    <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
                        علاقه‌مند به توسعه وب، JavaScript، React و Next.js.
                        این وبلاگ را برای اشتراک دانش، تجربیات و مقالات
                        تخصصی برنامه‌نویسی راه‌اندازی کرده‌ام.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-20">
                <div className="rounded-3xl bg-teal-600 dark:bg-slate-800 p-10 text-center text-white shadow-xl">
                    <FiMail size={42} className="mx-auto mb-4" />

                    <h2 className="text-3xl font-extrabold">
                        جدیدترین مقالات را دنبال کنید
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-teal-50">
                        هر هفته مقالات جدیدی در زمینه برنامه‌نویسی، توسعه وب
                        و تکنولوژی منتشر می‌کنیم.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-teal-700 transition hover:scale-105"
                    >
                        مشاهده مقالات
                        <FiArrowLeft />
                    </Link>
                </div>
            </section>
        </main>
    );
}