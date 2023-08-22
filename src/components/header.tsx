'use client'
import { Bars3BottomRightIcon, ChevronLeftIcon, StarIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'
import Overlay from './overlay'
import NewOverlay from './new-overlay'
import Conversations from './conversations'

function Menu() {
    return (
        <>  
            <div className='grid grid-flow-col gap-10 h-full items-center'>
                <div className='h-full grid place-content-center cursor-pointer text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200'>
                    <p className='text-sm font-semibold'>How to use</p>
                </div>
                <div className='h-full grid place-content-center cursor-pointer text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200'>
                    <p className='text-sm font-semibold'>FAQ & Help</p>
                </div>
                <div className='h-full grid place-content-center cursor-pointer text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200'>
                    <p className='text-sm font-semibold'>Upgrade</p>
                </div>
                <div className='w-[1px] h-5 border-r border-neutral-300 dark:border-neutral-800 border-dotted'/>
            </div>
            <div className='grid grid-flow-col gap-3 items-center cursor-pointer pl-10'>
                <Button icon={<SunIcon />} />
                <Button icon={<UserIcon />} />
            </div>
        </>
    )
}

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr] md:grid-cols-[auto_1fr] h-[var(--header-height)] px-5 md:px-6 xl:px-8 bg-white dark:bg-redax-dark/70 items-center shadow-[0_1px_0_0] shadow-gray-200 dark:shadow-redax-light'>
            <div className='grid justify-items-start md:hidden'>
                <NewOverlay overlayType='drawer-left' content={<Conversations />}>
                    <ChevronLeftIcon className='w-6 h-auto'/>
                </NewOverlay>
            </div>
            <div className='grid grid-flow-col items-center gap-3'>
                <Image 
                    src='/logo-circle.svg'
                    alt='Logo'
                    width='64'
                    height='69'
                    className='hidden md:grid w-6 md:w-7 h-fit'
                />
                <p className='grid grid-flow-col text-xl md:text-xl text-gray-900 dark:text-neutral-200 font-bold tracking-slight'>Redax<span className='tracking-tight font-light pl-0.5 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--color-light-blue)] to-[var(--color-purple)]'>GPT</span></p> 
            </div>
            <div className='grid justify-items-end lg:hidden'>
                <Overlay overlayType='drawer-right' title='RedaxGPT' content={<Menu />}>
                    <Bars3BottomRightIcon className='w-6 h-auto' />   
                </Overlay> 
            </div>
            <div className='hidden lg:grid grid-flow-col justify-end items-center'>
                <Menu />
            </div>
        </div>
    )
}