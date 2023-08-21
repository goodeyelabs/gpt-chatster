'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { formatDate, orderSessionsByCreateDate, getSessionMessages } from '@/tools/utils'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useEffect, useRef, useState } from 'react'
import { setScrollMain } from '@/redux/commonReducer'

export default function Messages() {
    const { activeSession, sessions, newSessions } = useAppSelector(state => state.sessions.data)
    const { scrollMain } = useAppSelector(state => state.common.data)
    const [mounted, setMounted] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null); 
    const dispatch = useAppDispatch();

    const list:any = newSessions.slice().reverse()
    const messages = list[activeSession].newMessages

    useEffect(() => {
        setActiveSession(0)
        dispatch(setScrollMain(true))
        setMounted(true)
    },[])

    useEffect(() => {
        if (scrollMain) {
            mainRef?.current?.scrollIntoView()
            dispatch(setScrollMain(false))
        }
    },[scrollMain])

    if (list[activeSession]) {
        return (
            <div className='grid pb-[var(--sub-header-height)] items-start content-start w-full px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 mx-auto'>
                {
                    messages.map((m:object, m_idx:number) => {
                        const msg:any = m

                        //  TODO: make this bit DRY
                        //  GPT response bubble
                        if (msg.author === 'server') {
                            return (
                                <div 
                                    key={m_idx} 
                                    className='grid px-2.5 md:px-3 xl:px-4'
                                    >
                                    <div className='grid gap-2 w-[90%] place-self-start justify-start justify-items-start py-4'>
                                        <div className='grid bg-neutral-50 rounded-[10px] px-2.5 md:px-3 xl:px-4'>
                                            <p className='text-sm font-medium leading-relaxed text-neutral-800 py-2'>
                                                {msg.message || 'New message'}
                                            </p>
                                        </div>
                                        <p className='text-xs text-neutral-400/80 tracking-normal'><span className='font-medium'>RedaxGPT</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
                                    </div>
                                </div>
                            )
                        }

                        //  User response bubble
                        return (
                            <div 
                                key={m_idx} 
                                className='grid px-2.5 md:px-3 xl:px-4'
                            >
                                <div className='grid gap-2 w-[90%] place-self-end justify-end justify-items-end py-4'>
                                    <div className='grid bg-gradient-to-r from-[var(--color-light-blue)] to-[var(--color-blue)] rounded-[10px] px-2.5 md:px-3 xl:px-4'>
                                        <p className='text-sm font-medium leading-relaxed text-white py-2'>
                                            {msg.message || 'New message'}
                                        </p>
                                    </div>
                                    <p className='text-xs text-neutral-400/80 tracking-normal'><span className='font-medium'>Stanley</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
                                </div>
                            </div>
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