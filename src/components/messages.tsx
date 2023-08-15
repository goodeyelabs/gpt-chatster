'use client'
import { useAppSelector } from '@/redux/hooks'
import { formatDate } from '@/tools/utils'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useEffect } from 'react'

export default function Messages() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)

    useEffect(() => {
        setActiveSession(0)
    },[])

    if (sessions[activeSession]) {
        return (
            <div className='grid gap-8 py-2 content-start'>
                 <div className='grid gap-8 content-start'>
                     {
                        Object.keys(sessions[activeSession].messages).map((m:string, m_index:number) => {
                            const msg = sessions[activeSession].messages[m_index]

                            return (
                                <div key={m_index} className='grid pb-6 hover:bg-black/20 cursor-pointer gap-4 border-b border-dashed border-slate-200 dark:border-zinc-700'>
                                    <p className='text-base text-slate-300 font-medium tracking-tight'>{sessions[activeSession].messages[m].message || 'New chat session'}</p>
                                    <p className='text-sm text-slate-500'>{formatDate(m)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
    return (
        <></>
    )
}