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
            <div className='grid grid-flow-col gap-10 items-center pr-7'>
                <div className='h-full grid place-content-center'>
                    <p className='text-sm font-bold text-neutral-700'>How to use</p>
                </div>
                <div className='h-full grid place-content-center'>
                    <p className='text-sm font-bold text-neutral-700'>FAQ & Help</p>
                </div>
            </div>
            <div className='grid grid-flow-col gap-3 items-center'>
                <Button icon={<StarIcon />} text='Upgrade' customClass={'bg-blue-100 text-sky-500'} />
                <Button icon={<SunIcon />} />
                <Button icon={<UserIcon />} />
            </div>
        </>
    )
}

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr] md:grid-cols-[auto_1fr] h-[var(--header-height)] px-5 md:px-6 xl:px-8 bg-white items-center'>
            <div className='grid justify-items-start md:hidden'>
                <NewOverlay overlayType='drawer-left' content={<Conversations />}>
                    <ChevronLeftIcon className='w-6 h-auto'/>
                </NewOverlay>
            </div>
            <div className='grid grid-flow-col items-center gap-2   '>
                <Image 
                    src='/logo-circle.svg'
                    alt='Logo'
                    width='64'
                    height='69'
                    className='hidden md:grid w-6 md:w-7 h-fit'
                />
                <p className='grid text-lg text-gray-900 font-bold tracking-slight'>RedaxGPT</p> 
            </div>
            <div className='grid justify-items-end lg:hidden'>
                <Overlay overlayType='drawer-right' title='RedaxGPT' content={<Menu />}>
                    <Bars3BottomRightIcon className='w-6 h-auto' />   
                </Overlay> 
            </div>
            <div className='hidden lg:grid gap-3 grid-flow-col justify-end items-center'>
                <Menu />
            </div>
        </div>
    )
}