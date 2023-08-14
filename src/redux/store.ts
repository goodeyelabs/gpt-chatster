import { configureStore } from "@reduxjs/toolkit";
import promptReducer from "./promptReducer";

export const store = configureStore({
    reducer: {
        prompt: promptReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
