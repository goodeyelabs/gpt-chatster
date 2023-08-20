'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { formatDate, orderSessionsByCreateDate, getSessionMessages } from '@/tools/utils'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useEffect, useRef, useState } from 'react'
import { setScrollMain } from '@/redux/commonReducer'

export default function Messages() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const { scrollMain } = useAppSelector(state => state.common.data)
    const [mounted, setMounted] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null); 
    const dispatch = useAppDispatch();

    const list:any = orderSessionsByCreateDate(sessions)
    const messages = getSessionMessages(list[activeSession].messages)

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
            <div className='grid items-start content-start w-full px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 mx-auto'>
                {
                    messages.map((m:object, m_idx:number) => {
                        const msg:any = m

                        //  TODO: make this bit DRY
                        //  GPT response bubble
                        if (msg.author === 'server') {
                            return (
                                // <div key={m_idx} className='grid gap-3 w-[90%] place-self-start justify-start justify-items-start'>
                                //     <div className='grid cursor-pointer rounded-[15px] bg-slate-100/80 dark:bg-neutral-800/50 px-6 py-[10px]'>
                                //         <p className='text-base md:text-sm font-medium text-slate-600/80 dark:text-slate-300 tracking-tight'>{msg.message || 'New message'}</p>
                                //     </div>
                                //     <p className='text-xs text-slate-400/70 dark:text-slate-600 tracking-tight'><span className='font-semibold dark:text-slate-500'>RedaxGPT</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
                                // </div>
                                <div 
                                    key={m_idx} 
                                    className='grid cursor-pointer px-5 md:px-6 xl:px-8 transition-all ease-in-out hover:bg-neutral-100/40'
                                >
                                    <div className='grid gap-2 w-[90%] place-self-start justify-start justify-items-start border-t py-6 border-neutral-200 border-dashed border-none'>
                                        <p className='text-sm font-medium leading-relaxed text-neutral-950'>
                                            {msg.message || 'New message'}
                                        </p>
                                        <p className='text-xs text-neutral-400/80 dark:text-slate-600 tracking-normal'><span className='font-medium dark:text-slate-500'>RedaxGPT</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
                                    </div>
                                </div>
                            )
                        }

                        //  User response bubble
                        // return (
                        //     <div key={m_idx} className='grid gap-3 w-[90%] place-self-end justify-end justify-items-end'>
                        //         <div className='grid cursor-pointer rounded-[15px] bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-light-blue)] dark:bg-slate-800 px-6 py-[10px]'>
                        //         <p className='text-base md:text-sm font-medium text-slate-50 dark:text-slate-300 tracking-tight'>{msg.message || 'New message'}</p>
                        //         </div>
                        //         <p className='text-xs text-slate-400/70 dark:text-slate-600 place-self-end tracking-tight'><span className='font-semibold dark:text-slate-500'>Stanley</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
                        //     </div>
                        // )

                        return (
                            <div 
                                key={m_idx} 
                                className='grid cursor-pointer px-5 md:px-6 xl:px-8 transition-all ease-in-out hover:bg-neutral-100/40'
                            >
                                <div className='grid gap-2 w-[90%] place-self-end justify-end justify-items-end border-t py-6 border-neutral-200 border-dashed border-none'>
                                    <p className='text-sm font-medium leading-relaxed text-neutral-950'>
                                        {msg.message || 'New message'}
                                    </p>
                                    <p className='text-xs text-neutral-400/80 dark:text-slate-600 tracking-normal'><span className='font-medium dark:text-slate-500'>Stanley</span> &middot; {mounted ? formatDate(msg.timestamp.toString()) : 'Loading'}</p>
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