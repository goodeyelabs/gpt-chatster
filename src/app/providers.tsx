'use client'
import {ThemeProvider} from 'next-themes'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

type providerProps = {
    children: React.ReactNode
}

export default function Providers({ children }:providerProps) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </Provider>
    )
}