'use client' 

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiProfileLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaBars, FaHome, FaInfoCircle, FaPhoneAlt, FaUser, FaUserShield } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GrPowerShutdown } from "react-icons/gr";
import { jwtDecode } from "jwt-decode";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setDarkmod } from "@/redux/darkmod/darkmod";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { Blog } from "@/types/blog";

function Navbar({ allArticles }: { allArticles: Blog[] }) {
    const [showMenu, setShowMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [user, setUser] = useState<any>(null);
    const ref = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const { darkmod } = useAppSelector(state => state.darkmod);
    const [search, setSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredArticle, setFilteredArticle] = useState<Blog[]>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (searchInput != "") {
            const filterArticles = allArticles?.filter((f) => {
                return f.title.toLocaleLowerCase().trim().includes(searchInput.toLocaleLowerCase().trim())
            })
            setFilteredArticle(filterArticles)
        } else {
            setFilteredArticle([])
        }
    }, [searchInput])

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
            if (!searchRef.current?.contains(e.target as Node)) {
                setSearch(false)
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
        <header className="fixed top-0 z-50 left-0 right-0 bg-white dark:bg-slate-700 shadow dark:shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <FaBars onClick={() => { setShowMenu(!showMenu) }} size={20} className="cursor-pointer md:hidden" />
                    <Link
                        href="/"
                        className="text-2xl font-bold text-teal-700 dark:text-white"
                    >
                        وبلاگ من
                    </Link>
                    <div>
                        <div ref={searchRef} className="relative">
                            <div onClick={() => { setSearch(!search) }} className="border dark:border-gray-200 border-gray-500 rounded-md p-1 cursor-pointer">
                                <CiSearch size={24} className="text-gray-500 dark:text-gray-200" />
                            </div>
                            {search &&
                                <div className="bg-white dark:bg-slate-700 dark:text-white border flex flex-col border-gray-300 rounded-md p-4 shadow-md fixed right-4 md:right-auto top-16 w-75 z-50">
                                    <input onChange={(e) => { setSearchInput(e.target.value) }} type="text" className="border border-gray-300 w-full px-2 p-1 rounded-md" placeholder="جستجو" />
                                    <div>
                                        {filteredArticle?.map((article) => {
                                            return (
                                                <Link key={article.id} href={`/article/${article.id}`} className="mt-2 dark:hover:bg-slate-500 hover:bg-teal-50 rounded-md p-1 flex gap-2 items-center">
                                                    {article.image &&
                                                        <Image
                                                            src={`http://localhost:4004${article.image}`}
                                                            alt={article.title}
                                                            width={50}
                                                            height={50}
                                                            unoptimized
                                                            className="rounded-md w-14 h-10"
                                                        />
                                                    }
                                                    <h3 className="font-bold">{article.title}</h3>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {showMenu && <div onClick={() => { setShowMenu(false) }} className="bg-black/30 fixed inset-0 z-20"></div>}

                <nav className={`${showMenu ? "w-52 dark:bg-slate-700 bg-white" : "w-0 translate-x-10 overflow-hidden dark:bg-slate-700 bg-white"} transition p-4 md:p-0 flex flex-col items-start fixed z-30 top-0 bottom-0 shadow-2xl  md:w-fit right-0 h-screen bg-inherit md:static md:flex-row md:h-full md:shadow-none md:items-center gap-6 lg:gap-8`}>
                    <div className="flex justify-between w-full md:hidden border-b border-gray-200 pb-4">
                        <h2 className="text-teal-700 dark:text-white text-xl font-bold">منو اصلی</h2>
                        <CgClose onClick={() => { setShowMenu(false) }} size={24} className="cursor-pointer" />
                    </div>

                    <Link href="/" className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-slate-300">
                        <FaHome />
                        صفحه اصلی
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
                                className="dark:bg-slate-700 dark:text-white cursor-pointer group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border dark:border-gray-300 border-teal-600 text-teal-700 font-semibold transition-all duration-300 hover:text-white"
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
                            className="cursor-pointer group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border dark:text-slate-700 dark:border-gray-300 border-teal-600 text-teal-700 font-semibold transition-all duration-300 hover:text-white"
                        >
                            <span className="absolute inset-0 w-0 dark:bg-slate-700 bg-teal-700 transition-all duration-300 group-hover:w-full"></span>
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