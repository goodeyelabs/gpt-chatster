
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface InitialState {
    data: {
        scrollMain: boolean,
        auth: boolean,
        gptResponseIndex: number,
    }
}

const initialState: InitialState = {
    data: {
        scrollMain: false,
        auth: true,
        gptResponseIndex: 0,
    }
}

export const sessionsSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setScrollMain: (state, action: PayloadAction<boolean>) => {
            state.data = {...state.data, scrollMain: action.payload}
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.data = {...state.data, auth: action.payload}
        },
        setGptResponseIndex: (state, action: PayloadAction<number>) => {
            state.data = {...state.data, gptResponseIndex: action.payload}
        },
    }
})

export const { setScrollMain, setAuth, setGptResponseIndex } = sessionsSlice.actions
export default sessionsSlice.reducer
