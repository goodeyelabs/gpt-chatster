'use client'
import { Bars3BottomRightIcon, BeakerIcon, ChatBubbleLeftIcon, Cog6ToothIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[auto_1fr_auto] justify-items-center h-[4rem] px-5 bg-white items-center'>
            <Button icon={<ChatBubbleLeftIcon />} text='Chats' />    
            <div>
            <Image 
                src='/logo-circle.svg'
                alt='Logo'
                width='64'
                height='69'
                className='w-7 h-fit'
            />
            </div>
            <Button icon={<Bars3BottomRightIcon />} />    
        </div>
    )
}