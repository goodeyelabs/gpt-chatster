'use client'
import {ThemeProvider} from 'next-themes'

type providerProps = {
    children: React.ReactNode
}

export default function Providers({ children }:providerProps) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}