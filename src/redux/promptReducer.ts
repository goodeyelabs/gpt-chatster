
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PromptInitialState {
    data: {
        prompt: string,
    }
}

const initialState: PromptInitialState = {
    data: {
        prompt: '',
    }
}

export const promptSlice = createSlice({
    name: 'prompt',
    initialState,
    reducers: {
        addPrompt: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, prompt: action.payload}
        }
    }
})

export const { addPrompt } = promptSlice.actions
export default promptSlice.reducer
