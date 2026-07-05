import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DarkmodType = "light" | "dark"


const initialState = {
    darkmod: "light"
}

const darkmodSlice = createSlice({
    name: "darkmod",
    initialState: initialState,
    reducers: {
        setDarkmod: (state, action: PayloadAction<DarkmodType>) => {
            state.darkmod = action.payload
            localStorage.setItem("darkmod", action.payload)
        }
    }
})

export const { setDarkmod } = darkmodSlice.actions;
export default darkmodSlice.reducer;