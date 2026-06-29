import type { Metadata } from "next";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";


export const metadata: Metadata = {
    title: "پنل ادمین",
    description: "weblog , panel-admin",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}
