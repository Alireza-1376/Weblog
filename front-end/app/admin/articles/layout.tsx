import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "مدیریت مقالات",
    description: "weblog , panel-admin",
};


function layout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
            {children}
            {modal}
        </>
    )
}

export default layout;