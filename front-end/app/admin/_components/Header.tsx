"use client"
import { FiMenu } from 'react-icons/fi';
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { useContext } from 'react';
import { ShowSidebarContext } from '@/context/ShowSidebar';
import Link from 'next/link';
import { toJalali } from '@/utils/date';


function Header() {
    const {showSidebar,setShowSidebar} = useContext(ShowSidebarContext);
    return (
        <div className="bg-white p-4 dark:bg-gray-600 shadow-md w-screen h-app-header-h sticky z-20 top-0 right-0 left-0 flex justify-between items-center gap-4 px-4">
            <span onClick={()=>{setShowSidebar(!showSidebar)}} className="md:hidden cursor-pointer">
                <FiMenu size={24} />
            </span>
            <p className="hidden md:block">{toJalali()}</p>
            <div className="flex items-center gap-3">
                <p className="relative">
                    <span className="border-2 w-1.5 h-1.5 right-1 rounded-full z-10 dark:border-white border-red-500 animate-ping absolute"></span>
                    <HiOutlineBell size={24} />
                </p>
                <p className="text-sky-500 border-2 rounded-full p-1">
                    <HiOutlineUser size={24} />
                </p>
                <Link href="/" className='border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-1 rounded-md'>خروج</Link>
            </div>
        </div>
    )
}

export default Header;