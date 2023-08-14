'use client'
import { Bars3Icon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Overlay from './overlay'
import Contact from '@/views/contact'
import Image from 'next/image'
import Link from 'next/link';
import DarkModeSwitch from '@/components/dark-mode-switch'
import { addSession } from '@/redux/sessionsReducer'
import { useAppDispatch } from '@/redux/hooks'

function Header() {
    const dispatch = useAppDispatch();

    return (
        <div className='grid col-span-full bg-white dark:bg-zinc-900 h-16 sticky top-0 border-b border-slate-200 dark:border-zinc-800 px-4 sm:px-8'>
            <div className='grid h-full w-full mx-auto max-w-7xl items-center justify-items-start grid-cols-[1fr_auto]'>
                <Link className="grid" href="/">
                    <div className='grid grid-flow-col gap-2 items-center select-none cursor-pointer'>
                        <Image 
                            src='/logo-circle.svg'
                            alt='Logo'
                            width='64'
                            height='69'
                            className='w-6 h-fit'
                        />
                        <p className='truncate text-zinc-800 dark:text-slate-100 font-bold text-lg tracking-tight'>RedactGPT</p>
                    </div>
                </Link>
                <div className='grid grid-flow-col gap-8'>
                    <Link className="grid" href="/services">
                        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                            <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Help</p>
                        </div>
                    </Link>
                    <Link className="grid" href="/projects">
                        <div  className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                            <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Feedback</p>
                        </div>
                    </Link>
                    <Link className="grid" href="/about">
                        <div className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                            <p className='text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-blue-400'>Upgrade</p>
                        </div>
                    </Link>
                    <div className='h-6 border-r border-dotted border-slate-300 dark:border-zinc-700 self-center' />
                    <DarkModeSwitch />
                    <Button
                        icon={<ChatBubbleLeftIcon />}
                        text='New chat'
                        onClick={() => dispatch(addSession('Test name'))}
                    />
                    <Overlay overlayType={'drawer-right'} content={<div><p>Side menu</p></div>}>
                        <div className='group transition-all duration-75 items-center cursor-pointer grid md:hidden select-none'>
                            <Bars3Icon className="h-6 w-6 text-zinc-800 dark:text-zinc-300 group-hover:text-blue-400" />
                        </div>
                    </Overlay>
                </div>
            </div>
        </div>
    )
}

export default Header