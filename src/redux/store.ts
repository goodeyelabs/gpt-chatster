import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./sessionsReducer";
import messagesReducer from "./messagesReducer";

export const store = configureStore({
    reducer: {
        sessions: sessionsReducer,
        messages: messagesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
