'use client'
import { cloneElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import Overlay from '@/components/overlay';

type listTypes = {
    mode: string,
    name: string,
    icon: any,
}

const list: listTypes[] = [
    {
        mode: 'light',
        name: 'Light',
        icon: <SunIcon />
    },
    {
        mode: 'dark',
        name: 'Dark',
        icon: <MoonIcon />
    },
    {
        mode: 'system',
        name: 'Automatic',
        icon: <ComputerDesktopIcon />
    },
]

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
            <div className='grid items-start bg-white dark:bg-zinc-800 auto-rows-[4rem]'>
                {
                    list.map((itm:any, key:number) => {
                        const Icon = ({ className }: { className: string}) => {
                            return (
                                <>
                                    {cloneElement(
                                        itm.icon,
                                        {
                                            className: className
                                        }
                                    )}
                                </>
                            )
                        }
                        
                        return (
                            <div key={key} onClick={() => mounted ? handleClick(itm.mode) : null} className='group grid grid-flow-col grid-cols-[4rem_1fr] pr-4 items-center justify-start h-full border-b dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-600 transition-all ease-in-out cursor-pointer'>
                                <Icon className={`h-5 w-5 ${theme === itm.mode ? 'text-blue-400' :  'dark:text-gray-300'} group-hover:text-blue-400 transition-all ease-in-out grid place-self-center`} />
                                <p className={`text-sm font-semibold group-hover:text-blue-400 transition-all ease-in-out ${theme === itm.mode ? 'text-blue-400 dark:text-blue-400' : 'text-slate-700 dark:text-zinc-300'}`}>{itm.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    function ActiveOption() {
        return (
            <>
                {
                    theme === 'light' &&
                        <SunIcon className='h-5 w-5 text-zinc-700 hover:text-blue-400' />
                }
                {
                    theme === 'dark' &&
                        <MoonIcon className='h-5 w-5 text-slate-300 hover:text-blue-400' />
                }
                {
                    (theme === 'system' && systemTheme === 'light') &&
                        <SunIcon className='h-5 w-5 text-zinc-700 hover:text-blue-400' />

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
                    <Overlay overlayType='drawer-right' content={<Options />}>
                        <div className='h-full w-full grid place-content-center relative'>
                            <ActiveOption />
                        </div>
                    </Overlay>
            }
            {
                !mounted &&
                    <SunIcon className='invisible h-5 w-5 text-slate-300' />
            }        
        </div>
        
    )
    
}