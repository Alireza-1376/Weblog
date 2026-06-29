"use client"

import { SidebarType } from "@/types/sidebar";
import { createContext, ReactNode, useState } from "react";

export const ShowSidebarContext = createContext({} as SidebarType);

function SidebarProvider({ children }: { children: ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return <ShowSidebarContext.Provider value={{ showSidebar, setShowSidebar }}>{children}</ShowSidebarContext.Provider>
}

export default SidebarProvider ;