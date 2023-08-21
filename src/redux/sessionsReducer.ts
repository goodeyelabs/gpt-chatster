
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

function getCurrentTimestamp () {
    return Date.now() / 1000
}

type NewSessions = {
    newMessages: NewMessages[]
}

type NewMessages = {
    timestamp: number,
    message: string,
    author: string,
}

export interface InitialState {
    data: {
        newSessions: NewSessions[],
        activeSession: number,
        currentPrompt: string,
        sessions: {
            [sessionID:number]: {
                sessionName?: string,
                messages: {
                    [messageID:number]: {
                        timestamp: number,
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
        newSessions: [
            {
                newMessages: [
                    {
                        timestamp: 1692004200,
                        message: "Can you help me update my personal information with my mortgage provider, Wells Fargo?",
                        author: 'user',
                    },
                    {
                        timestamp: 1692004258,
                        message: "That is all for today, thanks.",
                        author: 'user',
                    },
                    {
                        timestamp: 1692004250,
                        message: "I\'ve sent you a weblink to your email to help you change your [redacted] details instantly. Anything else I can help with?",
                        author: 'server',
                    },
                    {
                        timestamp: 1692004258,
                        message: "That is all for today, thanks.",
                        author: 'user',
                    }
                ]
            },
            {
                newMessages: [
                    {
                        timestamp: 1692084000,
                        message: "Can you help me write a job application for the open role of dentist at the firm Toothy McToothy & Sons?",
                        author: 'user',
                    },
                    {
                        timestamp: 1692084002,
                        message: "[Redacted] is a great firm, let\'s get your resumé up to scratch for the role of [redacted].",
                        author: 'server',
                    },
                    {
                        timestamp: 1692084004,
                        message: "Do you have all your examination certificates to hand?",
                        author: 'server',
                    },
                    {
                        timestamp: 1692084030,
                        message: "Actually, I\'ll come back tomorrow.",
                        author: 'user',
                    }
                ]
            },
            {
                newMessages: [
                    {
                        timestamp: 1692200880,
                        message: "How do I cash a check when my bank account is entirely virtual? I don't have a branch to visit.",
                        author: 'user',
                    },
                    {
                        timestamp: 1692200881,
                        message: "It\'s Royal Bank of Canada.",
                        author: 'user',
                    },
                    {
                        timestamp: 1692200883,
                        message: "I will help you with cashing a check at [redacted]. Oftentimes virtual banks make arrangements with local grocery stores and retailers to allow customers to scan their checks securely at a terminal on the premises. This means the money is available in your account immediately.",
                        author: 'server',
                    },
                    {
                        timestamp: 1692200890,
                        message: "Does that help, or do you want more options?",
                        author: 'server',
                    },
                    {
                        timestamp: 1692200898,
                        message: "I don\'t live close to any shops, what else could I do?",
                        author: 'user',
                    },
                    {
                        timestamp: 1692200890,
                        message: "Many banks, including [redacted] have sophisticated mobile apps that allow customers to transact digitally. If you install [redacted]\'s mobile app for iPhone or Android, you will be able to scan your check using the phone\'s camera and securely add the funds to your account.",
                        author: 'server',
                    },
                    {
                        timestamp: 1692200898,
                        message: "That\'s perfect, I will do that. My sister-in-law Emily should be able to help me.",
                        author: 'user',
                    },
                    {
                        timestamp: 1692200900,
                        message: "Great news, I hope that [redacted] is able to help you if you get stuck. Good luck!",
                        author: 'server',
                    },
                ]
            }

        ],
        activeSession: 0,
        currentPrompt: '',
        sessions: {
            0: {
                messages: {
                    0: {
                        timestamp: 1692004200,
                        message: "Can you help me update my personal information with my mortgage provider, Wells Fargo?",
                        author: 'user',
                    },
                    1: {
                        timestamp: 1692004202,
                        message: "Hey Stanley, yes I can certainly help change your details with [redacted] bank",
                        author: 'server',
                    },
                    2: {
                        timestamp: 1692004250,
                        message: "I\'ve sent you a weblink to your email to help you change your [redacted] details instantly. Anything else I can help with?",
                        author: 'server',
                    },
                    3: {
                        timestamp: 1692004258,
                        message: "That is all for today, thanks.",
                        author: 'user',
                    }
                }
            },
            1: {
                messages: {
                    0: {
                        timestamp: 1692084000,
                        message: "Can you help me write a job application for the open role of dentist at the firm Toothy McToothy & Sons?",
                        author: 'user',
                    },
                    1: {
                        timestamp: 1692084002,
                        message: "[Redacted] is a great firm, let\'s get your resumé up to scratch for the role of [redacted].",
                        author: 'server',
                    },
                    2: {
                        timestamp: 1692084004,
                        message: "Do you have all your examination certificates to hand?",
                        author: 'server',
                    },
                    3: {
                        timestamp: 1692084030,
                        message: "Actually, I\'ll come back tomorrow.",
                        author: 'user',
                    }
                }
            },
            2: {
                messages: {
                    0: {
                        timestamp: 1692200880,
                        message: "How do I cash a check when my bank account is entirely virtual? I don't have a branch to visit.",
                        author: 'user',
                    },
                    1: {
                        timestamp: 1692200881,
                        message: "It\'s Royal Bank of Canada.",
                        author: 'user',
                    },
                    2: {
                        timestamp: 1692200883,
                        message: "I will help you with cashing a check at [redacted]. Oftentimes virtual banks make arrangements with local grocery stores and retailers to allow customers to scan their checks securely at a terminal on the premises. This means the money is available in your account immediately.",
                        author: 'server',
                    },
                    3: {
                        timestamp: 1692200890,
                        message: "Does that help, or do you want more options?",
                        author: 'server',
                    },
                    4: {
                        timestamp: 1692200898,
                        message: "I don\'t live close to any shops, what else could I do?",
                        author: 'user',
                    },
                    5: {
                        timestamp: 1692200890,
                        message: "Many banks, including [redacted] have sophisticated mobile apps that allow customers to transact digitally. If you install [redacted]\'s mobile app for iPhone or Android, you will be able to scan your check using the phone\'s camera and securely add the funds to your account.",
                        author: 'server',
                    },
                    6: {
                        timestamp: 1692200898,
                        message: "That\'s perfect, I will do that. My sister-in-law Emily should be able to help me.",
                        author: 'user',
                    },
                    7: {
                        timestamp: 1692200900,
                        message: "Great news, I hope that [redacted] is able to help you if you get stuck. Good luck!",
                        author: 'server',
                    },
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
            state.data = {...state.data, currentPrompt: '', sessions: {...state.data.sessions, [sessionID]: {sessionName: '', messages: {...state.data.sessions[sessionID].messages, [Object.keys(state.data.sessions[sessionID].messages).length]: {timestamp: getCurrentTimestamp(), message: message, author: author}}}}}
        },
    }
})

export const { setCurrentPrompt, setActiveSession, addSession, addMessage } = sessionsSlice.actions
export default sessionsSlice.reducer
