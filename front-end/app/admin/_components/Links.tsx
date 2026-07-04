'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconType } from "react-icons"

function Links({ Icon, title, url }: { Icon: IconType, title: string, url: string }) {
    const path = usePathname()
    return (
        <Link href={url} className={`${path==url ? "bg-teal-500 text-white" : ""} transition-all w-full p-2 rounded-md items-center flex gap-2`}>
            <Icon size={24} />
            <span>{title}</span>
        </Link>
    )
}

export default Links ;