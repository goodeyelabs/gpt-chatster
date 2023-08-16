'use client'
import { cloneElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Overlay from '@/components/overlay';
import RoundButton from './round-button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function DarkModeSwitch({ closeOverlay }: {closeOverlay?:any}) {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function AppearanceMenu() {
        return (
            <div className='grid place-content-center'>
                <div className='grid items-center grid-flow-col gap-4 place-content-center justify-items-center'>
                    <div 
                        onClick={() => mounted ? handleClick('light') : null}
                        className='relative group grid gap-2 place-content-center justify-items-center rounded-[10px] py-4 px-4 bg-slate-100 dark:bg-stone-800 hover:bg-slate-200 dark:hover:bg-stone-700 cursor-pointer'
                    >
                        {
                            theme === 'light' &&
                                <CheckCircleIcon className='absolute top-1 right-1 w-5 h-5' />
                        }
                        <SunIcon className='w-12 h-12 text-slate-800 dark:text-stone-400 group-hover:text-slate-900 dark:group-hover:text-slate-200' />
                        <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-stone-400'>Light</p>
                    </div>
                    <div 
                        onClick={() => mounted ? handleClick('dark') : null}
                        className='relative group grid gap-2 place-content-center justify-items-center rounded-[10px] py-4 px-4 bg-slate-100 dark:bg-stone-800 hover:bg-slate-200 dark:hover:bg-stone-700 cursor-pointer'
                    >   
                        {
                            theme === 'dark' &&
                                <CheckCircleIcon className='absolute top-1 right-1 w-5 h-5' />
                        }
                        <MoonIcon className='w-12 h-12 text-slate-800 dark:text-stone-400 group-hover:text-slate-900 dark:group-hover:text-slate-200' />
                        <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-stone-400'>Dark</p>
                    </div>
                    <div 
                        onClick={() => mounted ? handleClick('system') : null}
                        className='relative group grid gap-2 place-content-center justify-items-center rounded-[10px] py-4 px-4 bg-slate-100 dark:bg-stone-800 hover:bg-slate-200 dark:hover:bg-stone-700 cursor-pointer'
                    >
                        {
                            theme === 'system' &&
                                <CheckCircleIcon className='absolute top-1 right-1 w-5 h-5' />
                        }
                        <ComputerDesktopIcon className='w-12 h-12 text-slate-800 dark:text-stone-400 group-hover:text-slate-900 dark:group-hover:text-slate-200' />
                        <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-stone-400'>System</p>
                    </div>
                </div>
            </div>
        )
    }

    function handleClick(mode:string) {
        setTheme(mode)
        return closeOverlay()
    }

    useEffect(() => {
        setMounted(true)
    },[])

    if (mounted) {
        return (
            <>
                {
                    theme === 'light' &&
                        <Overlay overlayType='popup' title='Appearance' content={<AppearanceMenu />}>
                            <RoundButton icon={<SunIcon />} />
                        </Overlay>
                }
                {
                    theme === 'dark' &&
                        <Overlay overlayType='popup' title='Appearance' content={<AppearanceMenu />}>
                            <RoundButton icon={<MoonIcon />} />
                        </Overlay>
                }
                {
                    (theme === 'system' && systemTheme === 'light') &&
                        <Overlay overlayType='popup' title='Appearance' content={<AppearanceMenu />}>
                            <RoundButton icon={<SunIcon />} />
                        </Overlay>

                }
                {
                    (theme === 'system' && systemTheme === 'dark') &&
                        <Overlay overlayType='popup' title='Appearance' content={<AppearanceMenu />}>
                            <RoundButton icon={<MoonIcon />} />
                        </Overlay>
                }
            </>
        )
    }

    return (
        <RoundButton icon={<SunIcon />} />
    )
}