
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

function getCurrentTimestamp () {
    return Date.now()
}

export interface InitialState {
    data: {
        activeSession: number,
        sessions: {
            name?: string,
        }
    }
}

const initialState: InitialState = {
    data: {
        activeSession: 0,
        sessions: {},
    }
}

export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        setActiveSession: (state, action: PayloadAction<number>) => {
            state.data = {...state.data, activeSession: action.payload}
        },
        addSession: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, activeSession: Object.keys(state.data.sessions).length, sessions: {...state.data.sessions, [Object.keys(state.data.sessions).length]: {name: action.payload}}}
        }
    }
})

export const { addSession } = sessionsSlice.actions
export default sessionsSlice.reducer
