import { Metadata } from "next";

export const metadata: Metadata = {
    title: "دسته بندی",
    description: "weblog",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}