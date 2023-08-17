'use client'
import { Bars3BottomRightIcon, BeakerIcon, ChatBubbleLeftIcon, Cog6ToothIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Image from 'next/image'

export default function Header() {   
    return (
        <div className='grid gap-3 grid-cols-[1fr_auto_1fr] h-[4rem] px-5 bg-white items-center'>
            <div className='grid justify-items-start'>
                <Button icon={<ChatBubbleLeftIcon />} text='Conversations' />   
            </div>
            <div>
                <Image 
                    src='/logo-circle.svg'
                    alt='Logo'
                    width='64'
                    height='69'
                    className='w-8 h-fit'
                />
            </div>
            <div className='grid justify-items-end'>
                <Button icon={<Bars3BottomRightIcon />} />    
            </div>
        </div>
    )
}