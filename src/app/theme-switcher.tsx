'use client'
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeSwitcher() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    let output:React.ReactNode

    useEffect(() => {
        setMounted(true)
    },[])

    const appearance = theme + '_' + systemTheme

    return (
        <div className={`${!mounted ? 'invisible' : 'visible'} select-none border border-slate-200 dark:border-zinc-700 px-2 rounded-lg grid-flow-col items-center gap-2 hidden md:grid`}>
            <MoonIcon onClick={() => mounted ? setTheme('dark') : null} className={`
                ${mounted && appearance === 'system_light' ? 'text-slate-300 ' : ''}
                ${mounted && appearance === 'system_dark' ? 'text-zinc-700 ' : ''}
                ${mounted && appearance.startsWith('light_') ? 'text-slate-300 ' : ''}
                ${mounted && appearance.startsWith('dark_') ? 'text-slate-300 ' : ''}
                cursor-pointer h-5 w-5 hover:text-blue-400 transition-all duration-75 
            `} />
            <SunIcon onClick={() => mounted ? setTheme('light') : null} className={`
                ${mounted && appearance === 'system_light' ? 'text-slate-300 ' : ''}
                ${mounted && appearance === 'system_dark' ? 'text-zinc-700 ' : ''}
                ${mounted && appearance.startsWith('light_') ? 'text-zinc-700 ' : ''}
                ${mounted && appearance.startsWith('dark_') ? 'text-zinc-600 ' : ''}
                ${!mounted ? 'text-slate-300 ' : ''}
                cursor-pointer h-5 w-5 hover:text-blue-400 transition-all duration-75 
            `} />
            <div onClick={() => mounted ? setTheme('system') : null} className={`
                ${mounted && appearance === 'system_light' ? 'bg-zinc-800 ' : ''}
                ${mounted && appearance === 'system_dark' ? 'bg-slate-300 ' : ''}
                ${mounted && appearance.startsWith('light_') ? 'bg-slate-300 ' : ''}
                ${mounted && appearance.startsWith('dark_') ? 'bg-zinc-700 ' : ''}
                ${!mounted ? 'bg-slate-300 ' : ''}
                group cursor-pointer h-5 w-5 grid place-content-center rounded-full hover:bg-blue-400 transition-all duration-75 
            `}>
                <p className={`
                    ${mounted && appearance === 'system_light' ? 'text-white ' : ''}
                    ${mounted && appearance === 'system_dark' ? 'text-black ' : ''}
                    ${mounted && appearance.startsWith('light_') ? 'text-white ' : ''}
                    ${mounted && appearance.startsWith('dark_') ? 'text-black ' : ''}
                    ${!mounted ? 'text-white ' : ''}
                    text-xs font-light group-hover:text-white transition-all duration-75 
                `}>
                    A
                </p>
            </div>
        </div>
    )
    
}