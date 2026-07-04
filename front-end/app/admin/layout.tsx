import type { Metadata } from "next";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { cookies } from "next/headers";


export const metadata: Metadata = {
    title: "داشبورد",
    description: "weblog , panel-admin",
};

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies() ;
    const token = cookieStore.get("LoginToken")?.value as string ;

    return (
        <div>
            <Header />
            <div className="grid grid-cols-12">
                <Sidebar token={token}/>
                {children}
            </div>
        </div>
    );
}
