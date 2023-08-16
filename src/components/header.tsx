'use client'
import { Bars3Icon, InformationCircleIcon, StarIcon } from '@heroicons/react/24/outline'
import Overlay from './overlay'
import Image from 'next/image'
import Link from 'next/link';
import DarkModeSwitch from '@/components/dark-mode-switch'
import UserAvatar from './user'
import { SideBar } from './view';

function UpgradeMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <StarIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Upgrade options are on the way...</p>
            </div>
        </div>
    )
}

function HelpMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <InformationCircleIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Help docs are on the way...</p>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className='grid col-span-full bg-white dark:bg-zinc-900 h-full sticky top-0 border-b border-slate-200 dark:border-neutral-800/80 px-4 sm:px-8'>
            <div className='grid h-full w-full mx-auto max-w-10xl items-center justify-items-start grid-cols-[1fr_auto]'>
                <div className='grid md:hidden items-center grid-flow-col gap-3'>
                    <Overlay overlayType={'drawer-left'} title='Chat sessions' content={<SideBar />}>
                        <div className='group transition-all duration-75 items-center cursor-pointer grid select-none'>
                            <Bars3Icon className="h-6 w-6 text-zinc-800 dark:text-zinc-300 group-hover:text-blue-400" />
                        </div>
                    </Overlay>
                    <div className='grid grid-flow-col gap-3 items-center select-none cursor-pointer'>
                        <p className='truncate text-zinc-800 dark:text-slate-100 font-bold text-lg md:text-xl tracking-tight'>RedaxGPT</p>
                    </div>
                </div>
                <div className='hidden md:grid grid-flow-col gap-3 items-center select-none cursor-pointer'>
                    <Image 
                        src='/logo-circle.svg'
                        alt='Logo'
                        width='64'
                        height='69'
                        className='w-7 h-fit'
                    />
                    <p className='truncate text-zinc-800 dark:text-slate-100 font-bold text-xl tracking-tight'>RedaxGPT</p>
                </div>
                <div className='grid grid-flow-col gap-8'>
                    <Overlay overlayType='popup' title='Help center' content={<HelpMenu />}>
                        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                            <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Help center</p>
                        </div>
                    </Overlay>
                    <Overlay overlayType='popup' title='Upgrade to Enterprise' content={<UpgradeMenu />}>
                        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                            <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Upgrade</p>
                        </div>
                    </Overlay>
                    <div className='hidden md:grid h-6 border-r border-dotted border-slate-300 dark:border-zinc-700 self-center' />
                    <div className='grid grid-flow-col gap-4'>
                        <DarkModeSwitch />
                        <UserAvatar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header