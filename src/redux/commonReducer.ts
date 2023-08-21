
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface InitialState {
    data: {
        scrollMain: boolean,
        auth: boolean,
        gptResponseIndex: number,
        privacy: boolean,
        searchTerm: string,
        focusInput: boolean,
        serverTyping: number | null,
    }
}

const initialState: InitialState = {
    data: {
        scrollMain: false,
        auth: true,
        gptResponseIndex: 0,
        privacy: true,
        searchTerm: "",
        focusInput: true,
        serverTyping: null,
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
        setPrivacy: (state, action: PayloadAction<boolean>) => {
            state.data = {...state.data, privacy: action.payload}
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, searchTerm: action.payload}
        },
        setFocusInput: (state, action: PayloadAction<boolean>) => {
            state.data = {...state.data, focusInput: action.payload}
        },
        setServerTyping: (state, action: PayloadAction<number|null>) => {
            state.data = {...state.data, serverTyping: action.payload}
        },
    }
})

export const { setScrollMain, setAuth, setGptResponseIndex, setPrivacy, setSearchTerm, setFocusInput } = sessionsSlice.actions
export default sessionsSlice.reducer
