
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

function getCurrentTimestamp () {
    return Date.now() / 1000
}

export interface InitialState {
    data: {
        activeSession: number,
        currentPrompt: string,
        sessions: {
            [sessionID:number]: {
                sessionName: string,
                messages: {
                    [messageTimestamp:string]: {
                        message: string,
                        author: string,
                    }
                }
            }
        }
    }
}

const initialState: InitialState = {
    data: {
        activeSession: 0,
        currentPrompt: '',
        sessions: {
            0: {
                sessionName: 'Session 0',
                messages: {
                    '1692076758': {
                        message: "I am a test message",
                        author: 'user',
                    },
                    '1692076760': {
                        message: "I am another test message",
                        author: 'user',
                    },
                    '1692076768': {
                        message: "Here we go again on our own, blah blah. Just another part of me, said a famous singer once.",
                        author: 'user',
                    }
                }
            },
            1: {
                sessionName: 'Session 1',
                messages: {
                    '1692076815': {
                        message: "Oh look at that, I am a test message",
                        author: 'user',
                    },
                    '1692076715': {
                        message: "I am another test message",
                        author: 'user',
                    },
                    '1692056815': {
                        message: "Here we go again on our own, blah blah. Just another part of me, said a famous singer once.",
                        author: 'user',
                    }
                }
            }
        },
    }
}

export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        setCurrentPrompt: (state, action: PayloadAction<string>) => {
            state.data = {...state.data, currentPrompt: action.payload}
        },
        setActiveSession: (state, action: PayloadAction<number>) => {
            state.data = {...state.data, activeSession: action.payload}
        },
        addSession: (state) => {
            state.data = {...state.data, activeSession: Object.keys(state.data.sessions).length, currentPrompt: '', sessions: {...state.data.sessions, [Object.keys(state.data.sessions).length]: {sessionName: '', messages: {}, [getCurrentTimestamp()]: {message: ''}}}}        
        },
        addMessage: (state, action: PayloadAction<{sessionID: number, author: string, message: string}>) => {
            const { sessionID, message, author } = action.payload
            state.data = {...state.data, currentPrompt: '', sessions: {...state.data.sessions, [sessionID]: {sessionName: '', messages: {...state.data.sessions[sessionID].messages, [getCurrentTimestamp()]: {message: message, author: author}}}}}
        },
    }
})

export const { setCurrentPrompt, setActiveSession, addSession, addMessage } = sessionsSlice.actions
export default sessionsSlice.reducer
