import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-slate-700 text-white mt-20">

            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="grid md:grid-cols-4 gap-10">

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            وبلاگ من
                        </h3>

                        <p className="text-gray-400 leading-8">
                            مرجع آموزش برنامه نویسی، توسعه وب و هوش مصنوعی.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">
                            دسترسی سریع
                        </h4>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link href="/">خانه</Link>
                            </li>

                            <li>
                                <Link href="/articles">مقالات</Link>
                            </li>

                            <li>
                                <Link href="/about">درباره ما</Link>
                            </li>

                            <li>
                                <Link href="/contact">تماس با ما</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">
                            اطلاعات تماس
                        </h4>

                        <ul className="space-y-4 text-gray-400">

                            <li className="flex items-center gap-3">
                                <FaEnvelope />
                                info@myblog.com
                            </li>

                            <li className="flex items-center gap-3">
                                <FaPhone />
                                09120000000
                            </li>

                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                تهران، ایران
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">
                            شبکه های اجتماعی
                        </h4>

                        <div className="flex gap-4 text-2xl">

                            <Link href="#">
                                <FaInstagram />
                            </Link>

                            <Link href="#">
                                <FaTelegram />
                            </Link>

                            <Link href="#">
                                <FaLinkedin />
                            </Link>

                            <Link href="#">
                                <FaGithub />
                            </Link>

                        </div>
                    </div>

                </div>

            </div>

            <div className="border-t border-gray-700 py-5 text-center text-gray-400">
                © 2025 تمامی حقوق محفوظ است.
            </div>
        </footer>
    )
}

export default Footer;