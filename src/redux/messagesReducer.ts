
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

function getCurrentTimestamp () {
    return Date.now()
}

export interface InitialState {
    data: {
        currentPrompt: string,
        messages: {
            [timestamp:number]: {
                value: string
            }
        }
    }
}

const initialState: InitialState = {
    data: {
        currentPrompt: '',
        messages: {},
    }
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setCurrentPrompt: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, currentPrompt: action.payload}
        },
        setMessages: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, currentPrompt: '', messages: {...state.data.messages, [getCurrentTimestamp()]: {value: action.payload}}}
        }
    }
})

export const { setCurrentPrompt, setMessages } = messagesSlice.actions
export default messagesSlice.reducer
