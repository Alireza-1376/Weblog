import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "دسته بندی",
    description: "weblog - categories",
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
