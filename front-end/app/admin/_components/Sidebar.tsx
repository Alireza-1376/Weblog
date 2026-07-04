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
        <div className={`${showSidebar ? "w-60" : "w-0 translate-x-20"} md:bg-white flex flex-col bg-gray-50 gap-4 p-2 pt-4 shadow-2xl md:shadow-none border-l border-gray-300 md:translate-x-0 fixed transition-all md:static md:w-auto h-[calc(100vh-67.2px)] md:col-span-4 lg:col-span-3 xl:col-span-2`}>
            <Links Icon={RiDashboard2Fill} title="داشبورد" url="/admin" />
            <Links Icon={BiSolidCategory} title="مدیریت دسته بندی" url="/admin/categories" />
            <Links Icon={TbArticleFilled} title="مدیریت مقالات" url="/admin/articles" />
            {decode.role == "admin" && decode.username == "علیرضا" ?
                <Links Icon={HiUsers} title="مدیریت کاربران" url="/admin/users" />
                :
                ""
            }
        </div>
    )
}

export default Sidebar;