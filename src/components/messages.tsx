'use client'
import { useAppSelector } from '@/redux/hooks'
import { formatDate } from '@/tools/utils'

export default function Messages() {
    const { messages } = useAppSelector(state => state.messages.data)

    if (messages) {
        return (
            <div className='grid gap-8 py-2 content-start'>
                {/* <h2 className='text-slate-100 text-3xl font-bold tracking-tight'>Chat sessions</h2> */}
                <div className='grid gap-8 content-start'>
                    {
                        Object.keys(messages).map((timestamp:any) => {
                            return (
                                <div key={timestamp} className='grid pb-6 hover:bg-black/20 cursor-pointer gap-4 border-b border-dashed border-slate-700'>
                                    <p className='text-base text-slate-300 font-medium tracking-tight'>{messages[timestamp].value || 'New chat session'}</p>
                                    <p className='text-sm text-slate-500'>{formatDate(timestamp)}</p>
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