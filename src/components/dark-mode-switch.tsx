'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Overlay from '@/components/overlay';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Button from './button';

export default function DarkModeSwitch({ closeOverlay, dontHideText }: {dontHideText?:boolean, closeOverlay?:any}) {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function AppearanceMenu({ closeOverlay, dontHideText }: {dontHideText?:boolean, closeOverlay?:any,}) {

        function handleClick(mode:string) {
            setTheme(mode)
            //return closeOverlay()
        }

        return (
            <div className="grid gap-4 px-8 py-6">
                <div className='relative grid'>
                    {
                        theme === 'light' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5 text-green-500' />
                    }
                    <Button icon={<SunIcon />} text='Light' dontHideText onClick={() => mounted ? handleClick('light') : null} />
                </div>
                <div className='relative grid'>
                    {
                        theme === 'dark' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5 text-green-500' />
                    }
                    <Button icon={<MoonIcon />} text='Dark' dontHideText onClick={() => mounted ? handleClick('dark') : null} />
                </div>
                <div className='relative grid'>
                    {
                        theme === 'system' &&
                            <CheckCircleIcon className='absolute top-[50%] mt-[-10px] right-2 w-5 h-5 text-green-500' />
                    }
                    <Button icon={<ComputerDesktopIcon />} text='System' dontHideText onClick={() => mounted ? handleClick('system') : null} />
                </div>
            </div>
        )
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
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AppearanceMenu />}>
                            <Button icon={<SunIcon />} dontHideText={dontHideText} />
                        </Overlay>
                }
                {
                    theme === 'dark' &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AppearanceMenu />}>
                            <Button icon={<MoonIcon />} dontHideText={dontHideText} />
                        </Overlay>
                }
                {
                    (theme === 'system' && systemTheme === 'light') &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AppearanceMenu />}>
                            <Button icon={<SunIcon />} dontHideText={dontHideText} />
                        </Overlay>

                }
                {
                    (theme === 'system' && systemTheme === 'dark') &&
                        <Overlay overlayType='drawer-right' title='Appearance' content={<AppearanceMenu />}>
                            <Button icon={<MoonIcon />} dontHideText={dontHideText} />
                        </Overlay>
                }
            </>
        )
    }

    return (
        <Button icon={<MoonIcon />} />
    )
}