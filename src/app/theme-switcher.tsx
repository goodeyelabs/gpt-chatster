'use client'
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    let output:React.ReactNode

    useEffect(() => {
        setMounted(true)
    },[])

    if (mounted) {
        return (
            <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='group transition-all duration-75 items-center cursor-pointer hidden md:grid select-none'>
                {
                    theme === 'light' &&
                        <MoonIcon className="h-5 w-5 text-zinc-800 dark:text-zinc-300 group-hover:text-blue-400" />
                }
                {
                    theme !== 'light' &&
                        <SunIcon className="h-5 w-5 text-zinc-800 dark:text-zinc-300 group-hover:text-blue-400" />
                }
            </div>
        )
    }

    return (
        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid select-none'>
            <div className='invisible h-5 w-5' />
        </div>
    )
    
}