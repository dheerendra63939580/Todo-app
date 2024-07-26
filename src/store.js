import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from './components/Slice/Slice'
export const store = configureStore({
    reducer: {
        todo: reducerSlice
    }
})