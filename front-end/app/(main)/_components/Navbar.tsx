'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiProfileLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaBars, FaHome, FaInfoCircle, FaPhoneAlt, FaSearch, FaUser, FaUserShield } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GrPowerShutdown } from "react-icons/gr";
import { jwtDecode } from "jwt-decode";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setDarkmod } from "@/redux/darkmod/darkmod";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [user, setUser] = useState<any>(null);
    const ref = useRef<HTMLDivElement>(null);
    const { darkmod } = useAppSelector(state => state.darkmod);

    const dispatch = useAppDispatch();


    useEffect(() => {
        const token = document.cookie.split(';').find((item) => {
            return item.trim().startsWith('LoginToken')
        })?.split("=")[1]
        if (token) {
            const decode = jwtDecode(token)
            setUser(decode)
        }

        function handleDropDown(e: MouseEvent) {
            if (!ref.current?.contains(e.target as Node)) {
                setDropdown(false)
            }
        }

        document.addEventListener("click", handleDropDown)

        return () => {
            document.removeEventListener('click', handleDropDown)
        }


    }, []);

    function logout() {
        document.cookie = `LoginToken=;path=/;max-age=0`;
        setUser(null)
        toast.success("خارج شدید", { rtl: true, className: "Font-BYekan" })
    }


    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-700 shadow-md dark:shadow-sm dark:shadow-white">
            <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <FaBars onClick={() => { setShowMenu(!showMenu) }} size={20} className="cursor-pointer md:hidden" />
                    <Link
                        href="/"
                        className="text-2xl font-bold text-teal-700 dark:text-white"
                    >
                        وبلاگ من
                    </Link>
                </div>

                {showMenu && <div onClick={() => { setShowMenu(false) }} className="bg-black/30 fixed inset-0 z-20"></div>}

                <nav className={`${showMenu ? "w-52" : "w-0 translate-x-10 overflow-hidden"} transition p-4 md:p-0 flex flex-col items-start fixed z-30 top-0 bottom-0 shadow-2xl  md:w-fit right-0 h-screen bg-inherit md:static md:flex-row md:h-full md:shadow-none md:items-center gap-6 lg:gap-8`}>
                    <div className="flex justify-between w-full md:hidden border-b border-gray-200 pb-4">
                        <h2 className="text-teal-700 text-xl font-bold">منو اصلی</h2>
                        <CgClose onClick={() => { setShowMenu(false) }} size={24} className="cursor-pointer" />
                    </div>

                    <Link href="/" className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-slate-300">
                        <FaHome />
                        صفحه اصلی
                    </Link>

                    <Link href="/search" className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-slate-300">
                        <FaSearch />
                        جستجو و فیلتر
                    </Link>

                    <Link href="/about" className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-slate-300">
                        <FaInfoCircle />
                        درباره ما
                    </Link>

                    <Link href="/contact" className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-slate-300">
                        <FaPhoneAlt />
                        تماس با ما
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className={`${darkmod == "dark" && "rotate-180"} transition-all duration-200`}>
                        {darkmod == "light" ?
                            <IoMoonSharp onClick={() => dispatch(setDarkmod("dark"))} size={24} className="cursor-pointer transition-all rotate-0" />
                            :
                            <IoMdSunny onClick={() => dispatch(setDarkmod("light"))} size={24} className="cursor-pointer transition-all  rotate-90" />
                        }
                    </div>


                    {user ?
                        <div ref={ref} className="relative ">
                            <div
                                onClick={() => { setDropdown(!dropdown) }}
                                className="dark:bg-slate-700 dark:text-white cursor-pointer group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-teal-600 text-teal-700 font-semibold transition-all duration-300 hover:text-white"
                            >
                                <p className="absolute inset-0 w-0 bg-teal-700 dark:bg-slate-600 transition-all duration-300 group-hover:w-full"></p>
                                <FaUser className="relative z-10" />
                                <div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        {user.username}
                                    </span>
                                </div>
                            </div>
                            <div className={`${dropdown ? "" : " overflow-hidden scale-0"} dark:bg-slate-700  dark:text-white transition duration-200 absolute top-12 left-0 bg-white border divide-gray-300 border-gray-300 rounded-md shadow-md z-50 w-52 p-1`}>
                                {user?.role === "admin" && (
                                    <>
                                        <Link
                                            href="/admin"
                                            className="hover:bg-teal-600 dark:hover:bg-slate-600 hover:text-white rounded-md transition w-full text-start p-2 flex items-center gap-2"
                                        >
                                            <FaUserShield />
                                            <span>پنل مدیریت</span>
                                        </Link>
                                        <hr />
                                    </>
                                )}
                                <Link href="/auth/profile" className="hover:bg-teal-600 dark:hover:bg-slate-600 hover:text-white rounded-md transition w-full text-start p-2 cursor-pointer flex items-center gap-2">
                                    <RiProfileLine size={20} />
                                    <p>پروفایل</p>
                                </Link>
                                <hr />
                                <button onClick={() => { logout() }} className="hover:bg-teal-600 dark:hover:bg-slate-600 hover:text-white rounded-md transition w-full text-start p-2 cursor-pointer flex items-center gap-2">
                                    <GrPowerShutdown />
                                    <p>خروج</p>
                                </button>
                            </div>
                        </div>
                        :
                        <Link
                            href="/auth/login"
                            className="cursor-pointer group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-teal-600 text-teal-700 font-semibold transition-all duration-300 hover:text-white"
                        >
                            <span className="absolute inset-0 w-0 bg-teal-700 transition-all duration-300 group-hover:w-full"></span>
                            <FaUser className="relative z-10" />
                            <span className="relative z-10 flex items-center gap-2">
                                ورود
                                <IoExitOutline size={20} />
                            </span>
                        </Link>
                    }

                </div>

            </div>
        </header>
    )
}

export default Navbar;