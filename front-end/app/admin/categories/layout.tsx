import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "مدیریت دسته بندی",
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
