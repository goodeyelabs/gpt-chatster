'use client'
import { ArrowLeftIcon, Bars3BottomRightIcon, BeakerIcon, ChatBubbleLeftIcon, ChevronLeftIcon, Cog6ToothIcon, EllipsisVerticalIcon, InformationCircleIcon, LightBulbIcon, PaperAirplaneIcon, RectangleGroupIcon, StarIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'
import Overlay from './overlay'
import NewOverlay from './new-overlay'
import Conversations from './conversations'
import HeaderButton from './header-button'

function Menu() {
    return (
        <>  
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-medium text-neutral-600'>FAQ</p>
            </div>
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-medium text-neutral-600'>Help</p>
            </div>
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-medium text-neutral-600'>Send feedback</p>
            </div>
            <EllipsisVerticalIcon className='w-5 h-auto self-center opacity-50'/>
            <HeaderButton icon={<StarIcon />} text='Upgrade' />
            <HeaderButton icon={<SunIcon />} />
            <HeaderButton icon={<UserIcon />} />

        </>
    )
}

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr] md:grid-cols-[auto_1fr] h-[3.75rem] px-5 md:px-6 xl:px-8 bg-white items-center'>
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
                <p className='grid text-xl text-gray-900 font-bold tracking-tight'>RedaxGPT</p> 
            </div>
            <div className='grid justify-items-end lg:hidden'>
                <Overlay overlayType='drawer-right' title='RedaxGPT' content={<Menu />}>
                    <Bars3BottomRightIcon className='w-6 h-auto' />   
                </Overlay> 
            </div>
            <div className='hidden lg:grid gap-3 grid-flow-col justify-end'>
                <Menu />
            </div>
        </div>
    )
}