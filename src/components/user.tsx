'use client'
import RoundButton from "./round-button"
import Image from "next/image"
import { setAuth } from '@/redux/commonReducer'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { UserIcon } from "@heroicons/react/24/outline"
import Overlay from "./overlay"

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
    
    if (auth) {
        return (
            <Overlay overlayType='drawer-right' title='Stanley Tucci' content={<div><p onClick={() => dispatch(setAuth(false))}>Log out</p></div>}>
                <RoundButton icon={<Avatar />} />
            </Overlay>
        )
    }
    
    return (
        <Overlay overlayType='popup' content={<div />}>
            <RoundButton icon={<UserIcon />} />
        </Overlay>
    )
}