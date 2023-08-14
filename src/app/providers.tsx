'use client'
import {ThemeProvider} from 'next-themes'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

type providerProps = {
    children: React.ReactNode
}

export default function Providers({ children }:providerProps) {
    return (
        <ThemeProvider attribute="class">
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}