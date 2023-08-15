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
            <div className='grid content-start gap-8 pt-8'>
                {
                    Object.keys(sessions[activeSession].messages).map((m:string, m_index:number) => {
                        const msg = sessions[activeSession].messages[m]

                        if (msg.author === 'server') {
                            return (
                                <div className='grid gap-2 w-[80%]'>
                                    <div key={m_index} className='grid cursor-pointer rounded-3xl bg-slate-500/30 px-6 py-4'>
                                        <p className='text-base text-slate-300 font-medium tracking-tight'>{msg.message || 'New message'}</p>
                                    </div>
                                    <p className='text-xs text-slate-600'>{formatDate(m)}</p>
                                </div>
                            )
                        }

                        return (
                            <div className='grid gap-2 w-[90%] place-self-end justify-end'>
                                <div key={m_index} className='grid cursor-pointer rounded-3xl bg-slate-800/40 px-6 py-4'>
                                    <p className='text-base text-slate-300 font-medium tracking-tight'>{msg.message || 'New message'}</p>
                                </div>
                                <p className='text-xs text-slate-600'>{formatDate(m)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    return null
}