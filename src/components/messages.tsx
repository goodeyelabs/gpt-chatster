'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { formatDate } from '@/tools/utils'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useEffect, useRef, useState } from 'react'
import { setScrollMain } from '@/redux/commonReducer'

export default function Messages() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const { scrollMain } = useAppSelector(state => state.common.data)
    const [mounted, setMounted] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null); 
    const dispatch = useAppDispatch();

    useEffect(() => {
        setActiveSession(0)
        setMounted(true)
    },[])

    useEffect(() => {
        if (scrollMain) {
            mainRef?.current?.scrollIntoView()
            dispatch(setScrollMain(false))
        }
    },[scrollMain])

    if (sessions[activeSession]) {
        return (
            <div className='grid content-start gap-8 w-full px-24 pt-6 pb-10 mx-auto'>
                {
                    Object.keys(sessions[activeSession].messages).map((m:string, m_index:number) => {
                        const msg = sessions[activeSession].messages[m]
                        
                        //  TODO: make this bit DRY
                        //  GPT response bubble
                        if (msg.author === 'server') {
                            return (
                                <div key={m_index} className='grid gap-2 w-full place-self-start justify-start'>
                                    <div className='grid cursor-pointer rounded-[20px] bg-slate-500/30 px-6 py-4'>
                                        <p className='text-base text-slate-300 font-medium tracking-tight'>{msg.message || 'New message'}</p>
                                    </div>
                                    <p className='text-xs text-slate-600'>{mounted ? formatDate(m) : 'Loading'}</p>
                                </div>
                            )
                        }

                        //  User response bubble
                        return (
                            <div key={m_index} className='grid gap-2 w-full place-self-end justify-end'>
                                <div className='grid cursor-pointer rounded-[20px] bg-slate-800/40 px-6 py-4'>
                                    <p className='text-base text-slate-300 font-medium tracking-tight'>{msg.message || 'New message'}</p>
                                </div>
                                <p className='text-xs text-slate-600 place-self-end'>{mounted ? formatDate(m) : 'Loading'}</p>
                            </div>
                        )
                    })
                }
                <div ref={mainRef}></div>
            </div>
        )
    }
    
    return null
}