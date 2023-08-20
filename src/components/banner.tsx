'use client'
import Image from "next/image"
import RoundButton from "./round-button"
import { ChatBubbleLeftIcon, Cog8ToothIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { addSession } from "@/redux/sessionsReducer"
import { useAppDispatch } from '@/redux/hooks'
import Overlay from "./overlay"
import Button from "./button"

function SearchMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <MagnifyingGlassIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Search options are on the way...</p>
            </div>
        </div>
    )
}

export default function Banner() {
    const dispatch = useAppDispatch();

    return (
        <div className='grid gap-4 grid-rows-[1fr] grid-cols-[1fr] grid-flow-col justify-start px-5 sm:px-8 border-b border-slate-200 dark:border-neutral-800/80'>
            <div className='grid grid-flow-col gap-3 items-center select-none cursor-pointer'>
                {/* <ChatButton onClick={() => dispatch(addSession())} /> */}
            </div>
            {/* <div className='grid grid-flow-col gap-3 items-center select-none cursor-pointer'>
                <Overlay overlayType='popup' title='Search' content={<SearchMenu />}>
                    <Button icon={<MagnifyingGlassIcon />} text='Search chats...' />
                </Overlay>
            </div> */}
        </div>
    )
}