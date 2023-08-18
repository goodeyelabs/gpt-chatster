'use client'
import { ArrowLeftIcon, Bars3BottomRightIcon, BeakerIcon, ChatBubbleLeftIcon, ChevronLeftIcon, Cog6ToothIcon, EllipsisVerticalIcon, InformationCircleIcon, LightBulbIcon, PaperAirplaneIcon, RectangleGroupIcon, StarIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'
import Overlay from './overlay'
import { SideBar } from './view'
import NewOverlay from './new-overlay'
import Sessions from './sessions'

function Menu() {
    return (
        <>  
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-semibold text-neutral-700'>FAQ</p>
            </div>
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-semibold text-neutral-700'>Help</p>
            </div>
            <div className='h-[2.5rem] grid place-content-center px-3'>
                <p className='text-sm font-semibold text-neutral-700'>Upgrade</p>
            </div>
            <EllipsisVerticalIcon className='w-5 h-auto self-center opacity-50'/>
            <Button icon={<SunIcon />} />
            <Button icon={<UserIcon />} />

        </>
    )
}

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr] md:grid-cols-[auto_1fr] h-[4rem] px-5 md:px-8 xl:px-12 2xl:px-16 bg-white items-center'>
            <div className='grid justify-items-start md:hidden'>
                <NewOverlay overlayType='drawer-left' title='Conversations' content={
                    <div className="grid grid-rows-[auto_1fr] transform-gpu h-screen overflow-y-auto">
                        <div className="grid sticky top-0 border-b border-gray-200 bg-white">
                            <p>Header</p>
                        </div>
                        <div className="grid grid-rows-[1fr_auto]">
                            <div className="grid">
                                <Sessions />
                                <div style={{height:2000}}>
                                    <p>Other</p>
                                </div>
                            </div>
                            <div className="grid sticky bottom-0 min-h-[4rem]">
                                <p>Bottom</p>
                            </div>
                        </div>
                    </div>
                }>
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