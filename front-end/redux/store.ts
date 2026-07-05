import { configureStore } from "@reduxjs/toolkit";
import darkmodReducer from "./darkmod/darkmod"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        darkmod: darkmodReducer
    }
})

export default store;

type RootState = ReturnType<typeof store.getState> ;
type AppDispatch = typeof store.dispatch ;

export const useAppDispatch : ()=>AppDispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector ;