'use client'
import Image from "next/image"
import RoundButton from "./round-button"
import { ChatBubbleLeftIcon, Cog8ToothIcon } from "@heroicons/react/24/outline"
import { addSession } from "@/redux/sessionsReducer"
import { useAppDispatch } from '@/redux/hooks'
import Overlay from "./overlay"
import Button from "./button"

export default function Banner() {
    const dispatch = useAppDispatch();

    return (
        <div className='grid grid-rows-[5rem_1fr] grid-cols-[auto_1fr] grid-flow-col justify-between justify-items-end px-8 border-b border-slate-200 dark:border-neutral-800/80'>
            <div className='group grid col-start-1 row-start-1 grid-flow-col gap-2 items-center justify-start select-none cursor-pointer'>
                <div className='grid place-content-center h-10 w-10 rounded-full bg-slate-100 group-hover:bg-slate-200 dark:bg-black dark:group-hover:bg-zinc-800 transition-all ease-in-out'>
                    <Image 
                        src='/logo-circle.svg'
                        alt='Logo'
                        width='64'
                        height='69'
                        className='w-7 h-fit'
                    />
                </div>
                <p className='truncate text-zinc-800 dark:text-slate-100 font-bold text-xl tracking-tight'>RedaxGPT</p>
            </div>
            <div className='grid col-start-2 row-start-1 grid-flow-col gap-3 items-center justify-start select-none cursor-pointer'>
                <Button icon={<ChatBubbleLeftIcon />} text='New' onClick={() => dispatch(addSession())} />
            </div>
        </div>
    )
}