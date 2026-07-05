"use client"

import { Provider } from "react-redux";
import store from "@/redux/store";
import Body from "./Body";

function ThemeProvider({ children }: { children: React.ReactNode }) {

    return (
        <Provider store={store}>
            <Body>
                {children}
            </Body>
        </Provider>
    )
}

export default ThemeProvider