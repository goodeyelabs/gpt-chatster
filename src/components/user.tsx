'use client'
import Image from "next/image"
import { setAuth } from '@/redux/commonReducer'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline"
import Overlay from "./overlay"
import Button from "./button"

const Avatar = () => {
    return (
        <Image 
            src='/tucci-avatar.png'
            alt='Logo'
            width='64'
            height='64'
            className='w-7 h-fit rounded-full'
        />
    )
}

export default function UserAvatar() {
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(state => state.common.data)

    function AccountMenu() {
        return (
            <div className="grid px-8 py-6">
                <Button icon={<ArrowLeftOnRectangleIcon />} text='Sign out' onClick={() => alert('This demo doesnt support auth actions.')} />
            </div>
        )
    }
    
    if (auth) {
        return (
            <Overlay overlayType='drawer-right' title='Account' content={<AccountMenu />}>
                <Button icon={<Avatar />} customClass='bg-transparent border border-slate-200 px-0 py-0 md:w-[40px] item-center' />
            </Overlay>
        )
    }
    
    return (
        <Overlay overlayType='popup' content={<div />}>
            <Button icon={<UserIcon />} />
        </Overlay>
    )
}