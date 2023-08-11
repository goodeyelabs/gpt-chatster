'use client'
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import Overlay from '@/components/overlay';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    function Options({ closeOverlay }: {closeOverlay?:any}) {
        function handleClick(mode:string) {
            setTheme(mode)
            return closeOverlay()
        }

        return (
            <div className='grid items-start bg-white dark:bg-zinc-800 rounded-lg overflow-hidden'>
                <div onClick={() => mounted ? handleClick('light') : null} className='grid grid-flow-col grid-cols-[4rem_1fr] pr-6 items-center justify-start h-[4rem] border-b dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 cursor-pointer'>
                    <SunIcon className='h-5 w-5 text-gray-300 grid place-self-center' />
                    <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Light</p>
                </div>
                <div onClick={() => mounted ? handleClick('dark') : null} className='grid grid-flow-col grid-cols-[4rem_1fr] pr-6 items-center justify-start h-[4rem] border-b dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 cursor-pointer'>
                    <MoonIcon className='h-5 w-5 text-gray-300 grid place-self-center' />
                    <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Dark</p>
                </div>
                <div onClick={() => mounted ? handleClick('system') : null} className='grid grid-flow-col grid-cols-[4rem_1fr] pr-6 items-center justify-start h-[4rem] hover:bg-gray-100 dark:hover:bg-zinc-600 cursor-pointer'>
                    <ComputerDesktopIcon className='h-5 w-5 text-gray-300 grid place-self-center' />
                    <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>System</p>
                </div>
            </div>
        )
    }

    function ActiveOption() {
        console.log(theme, systemTheme)
        return (
            <>
                {
                    theme === 'light' &&
                        <SunIcon className='h-5 w-5 text-zinc-600 hover:text-blue-400' />
                }
                {
                    theme === 'dark' &&
                        <MoonIcon className='h-5 w-5 text-slate-300 hover:text-blue-400' />
                }
                {
                    (theme === 'system' && systemTheme === 'light') &&
                        <SunIcon className='h-5 w-5 text-slate-300 hover:text-blue-400' />
                }
                {
                    (theme === 'system' && systemTheme === 'dark') &&
                        <MoonIcon className='h-5 w-5 text-slate-300 hover:text-blue-400' />
                }
            </>
        )
    }

    return (
        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
            {
                mounted &&
                    <Overlay overlayType='menu' content={<Options />}>
                        <div><ActiveOption /></div>
                    </Overlay>
            }
            {
                !mounted &&
                    <SunIcon className='invisible h-5 w-5 text-slate-300' />
            }        
        </div>
        
    )
    
}