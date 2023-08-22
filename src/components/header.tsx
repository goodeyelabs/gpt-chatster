'use client'
import { Bars3BottomRightIcon, ChevronLeftIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'
import Overlay from './overlay'
import { SideMenu } from './view'
import Account from '@/app/menus/account'
import How from '@/app/menus/how'
import Help from '@/app/menus/help'
import Upgrade from '@/app/menus/upgrade'
import DarkModeSwitch from './dark-mode-switch'

function RightMenu() {
    return (
            <div className='grid grid-flow-row gap-4 h-full items-start content-start py-4 px-5 sm:px-8 md:px-12px lg:px-16px'>
                <div className='grid grid-flow-col gap-3 pb-4 border-b border-dashed border-neutral-200'>
                    <DarkModeSwitch />
                    <Overlay overlayType='popup' title='Account' content={<Account />}>
                        <Button icon={<UserIcon />} />
                    </Overlay>
                </div>
                <Overlay overlayType='popup' title='How to use' content={<How />}>
                    <div className='h-full grid place-content-center cursor-pointer bg-blue-25 hover:bg-neutral-100 rounded-[10px] py-4 text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>How to use</p>
                    </div>
                </Overlay>
                <Overlay overlayType='popup' title='FAQ + Help' content={<Help />}>
                    <div className='h-full grid place-content-center cursor-pointer  bg-blue-25 hover:bg-neutral-100 rounded-[10px] py-4 text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>FAQ + Help</p>
                    </div>
                </Overlay>
                <Overlay overlayType='popup' title='Upgrade to Enterprise' content={<Upgrade />}>
                    <div className='h-full grid place-content-center cursor-pointer  bg-blue-25 hover:bg-neutral-100 rounded-[10px] py-4 text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>Upgrade</p>
                    </div>
                </Overlay>
            </div>
    )
}

function Menu() {
    return (
        <>
            <div className='grid grid-flow-col gap-10 h-full items-center'>
                <Overlay overlayType='popup' title='How to use' content={<How />}>
                    <div className='h-full grid place-content-center cursor-pointer text-neutral-700 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>How to use</p>
                    </div>
                </Overlay>
                <Overlay overlayType='popup' title='FAQ + Help' content={<Help />}>
                    <div className='h-full grid place-content-center cursor-pointer text-neutral-700 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>FAQ + Help</p>
                    </div>
                </Overlay>
                <Overlay overlayType='popup' title='Upgrade to Enterprise' content={<Upgrade />}>
                    <div className='h-full grid place-content-center cursor-pointer text-neutral-700 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200'>
                        <p className='text-sm font-semibold'>Upgrade</p>
                    </div>
                </Overlay>
                <div className='w-[1px] h-5 border-r border-neutral-300 dark:border-neutral-800 border-dotted'/>
            </div>
            <div className='grid grid-flow-col gap-3 items-center cursor-pointer pl-10'>
                <DarkModeSwitch />
                <Overlay overlayType='popup' title='Account' content={<Account />}>
                    <Button icon={<UserIcon />} />
                </Overlay>
            </div>
        </>
    )
}

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr] md:grid-cols-[auto_1fr] h-full px-5 md:px-6 xl:px-8 bg-white dark:bg-redax-dark/70 items-center shadow-[0_1px_0_0] shadow-gray-200 dark:shadow-redax-light'>
            <div className='grid justify-items-start md:hidden cursor-pointer'>
                <Overlay overlayType='drawer-left' title='Chats' content={<SideMenu />}>
                    <ChevronLeftIcon className='w-6 h-auto'/>
                </Overlay>
            </div>
            <div className='grid grid-flow-col items-center gap-3 cursor-pointer'>
                <Image 
                    src='/logo-circle.svg'
                    alt='Logo'
                    width='64'
                    height='69'
                    className='hidden md:grid w-6 md:w-7 h-fit'
                />
                <p className='grid grid-flow-col text-xl text-gray-900 dark:text-neutral-200 font-bold tracking-slight'>Redax<span className='tracking-tight font-light pl-0.5 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--color-light-blue)] to-[var(--color-purple)]'>GPT</span></p> 
            </div>
            <div className='grid justify-items-end lg:hidden'>
                <Overlay overlayType='drawer-right' title='RedaxGPT' content={<RightMenu />}>
                    <Bars3BottomRightIcon className='w-6 h-auto cursor-pointer' />   
                </Overlay> 
            </div>
            <div className='hidden lg:grid grid-flow-col justify-end items-center'>
                <Menu />
            </div>
        </div>
    )
}