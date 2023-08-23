'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { formatDate, orderSessionsByCreateDate, getSessionMessages } from '@/tools/utils'
import { setActiveChat } from '@/redux/sessionsReducer'
import { useEffect, useRef, useState } from 'react'
import { setScrollMain } from '@/redux/commonReducer'

export default function Messages() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const { scrollMain } = useAppSelector(state => state.common.data)
    const [mounted, setMounted] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null); 
    const dispatch = useAppDispatch();

    const list:any = sessions
    const messages = list[activeSession].messages

    useEffect(() => {
        dispatch(setScrollMain(true))
        setMounted(true)
    },[])

    useEffect(() => {
        if (scrollMain && mounted) {
            mainRef?.current?.scrollIntoView()
            dispatch(setScrollMain(false))
        }
    },[mounted,scrollMain])

    if (mounted && list[activeSession]) {
        return (
            <div className='grid py-0 pb-6 lg:pb-3 items-start content-start w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-32 bg-white dark:bg-redax'>
                {
                    messages.map((m:object, m_idx:number) => {
                        const msg:any = m

                        return (
                            <></>
                        )
                    })    
                }
                {/* Next div is needed for scrollMain to work */}
                <div ref={mainRef}></div>
            </div>
        )
    }
    
    return null
}