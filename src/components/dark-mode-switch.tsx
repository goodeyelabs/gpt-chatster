'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Overlay from '@/components/overlay';
import RoundButton from './button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Button from './button';

export default function DarkModeSwitch({ closeOverlay }: {closeOverlay?:any}) {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function AccountMenu() {
        return (
            <div className="grid gap-4 px-8 py-6">
                <div className='relative grid'>
                    {
                        theme === 'light' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5' />
                    }
                    <Button icon={<SunIcon />} text='Light' onClick={() => mounted ? handleClick('light') : null} />
                </div>
                <div className='relative grid'>
                    {
                        theme === 'dark' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5' />
                    }
                    <Button icon={<MoonIcon />} text='Dark' onClick={() => mounted ? handleClick('dark') : null} />
                </div>
                <div className='relative grid'>
                    {
                        theme === 'system' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5' />
                    }
                    <Button icon={<ComputerDesktopIcon />} text='System' onClick={() => mounted ? handleClick('system') : null} />
                </div>
            </div>
        )
    }


    function handleClick(mode:string) {
        setTheme(mode)
        closeOverlay()
    }

    useEffect(() => {
        setMounted(true)
    },[])

    useEffect(() => {
        if (!theme) {
            setTheme('dark')
        }
    },[])

    if (mounted) {
        return (
            //  TODO: check if repeating the outer overlay wrapper each time is necessary (threw an error on cosolidating)
            <>
                {
                    theme === 'light' &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AccountMenu />}>
                            <RoundButton icon={<SunIcon />} />
                        </Overlay>
                }
                {
                    theme === 'dark' &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AccountMenu />}>
                            <RoundButton icon={<MoonIcon />} />
                        </Overlay>
                }
                {
                    (theme === 'system' && systemTheme === 'light') &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AccountMenu />}>
                            <RoundButton icon={<SunIcon />} />
                        </Overlay>

                }
                {
                    (theme === 'system' && systemTheme === 'dark') &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AccountMenu />}>
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