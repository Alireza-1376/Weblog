"use client"
import { BiSolidCategory } from "react-icons/bi";
import { TbArticleFilled } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { RiDashboard2Fill } from "react-icons/ri";
import { ShowSidebarContext } from "@/context/ShowSidebar";
import { useContext } from "react";
import Links from "./Links";
import { jwtDecode } from "jwt-decode";
import { JwtType } from "@/types/auth";

function Sidebar({ token }: { token: string }) {
    const decode: JwtType = jwtDecode(token)
    const { showSidebar } = useContext(ShowSidebarContext);

    return (
        <div
            className={`${showSidebar ? "w-60 translate-x-0" : "w-0 translate-x-full"} fixed md:static top-[67.2px] right-0 z-30 h-[calc(100vh-67.2px)] overflow-hidden flex flex-col gap-3 border-l border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-xl md:shadow-none transition-all duration-300 md:w-auto md:translate-x-0 md:col-span-4 lg:col-span-3 xl:col-span-2`}
        >
            <Links
                Icon={RiDashboard2Fill}
                title="داشبورد"
                url="/admin"
            />

            <Links
                Icon={BiSolidCategory}
                title="مدیریت دسته بندی"
                url="/admin/categories"
            />

            <Links
                Icon={TbArticleFilled}
                title="مدیریت مقالات"
                url="/admin/articles"
            />

            {decode.role === "admin" &&
                (
                    <Links
                        Icon={HiUsers}
                        title="مدیریت کاربران"
                        url="/admin/users"
                    />
                )}
        </div>

    )
}

export default Sidebar;