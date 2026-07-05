import { ToastContainer } from 'react-toastify';
import SidebarProvider from "@/context/ShowSidebar";
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';
import { setDarkmod } from '@/redux/darkmod/darkmod';
import { ImSpinner9 } from "react-icons/im";

function Body({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)
    const { darkmod } = useAppSelector(state => state.darkmod);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getDarkmod = localStorage.getItem('darkmod') as ("light" | "dark") || "light"
        dispatch(setDarkmod(getDarkmod))
        setLoading(false)
    }, [])


    return (
        <body className={`${darkmod} min-h-full flex flex-col bg-gray-100 dark:bg-slate-600 dark:text-white`}>
            {loading ?
                <div className='flex items-center justify-center h-screen w-screen'>
                    <ImSpinner9 className='animate-spin' size={60}/>
                </div>
                :
                <>
                    <ToastContainer />
                    <SidebarProvider>
                        {children}
                    </SidebarProvider>
                </>
            }

        </body>
    )
}

export default Body