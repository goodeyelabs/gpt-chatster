import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./sessionsReducer";
import commonReducer from "./commonReducer";

export const store = configureStore({
    reducer: {
        sessions: sessionsReducer,
        common: commonReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
