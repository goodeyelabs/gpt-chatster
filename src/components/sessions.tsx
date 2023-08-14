'use client'
import { useAppSelector } from '@/redux/hooks'
import { formatDate } from '@/tools/utils'
import { timeStamp } from 'console'

export default function Sessions() {
    const { sessions } = useAppSelector(state => state.sessions.data)

    if (sessions) {
        return (
            <div className='grid gap-8 py-2 content-start'>
                <h2 className='text-slate-100 text-3xl font-bold tracking-tight'>Chat sessions</h2>
                <div className='grid gap-8 content-start'>
                    {
                        Object.keys(sessions).map((itm:any, key:any) => {
                            return (
                                <div key={key} className='grid pb-6 hover:bg-black/20 cursor-pointer gap-4 border-b border-dashed border-slate-700'>
                                    <p className='text-base text-slate-300 font-medium tracking-tight'>{itm.name || 'New session'}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
    return null
}