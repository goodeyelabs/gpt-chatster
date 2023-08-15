'use client'
import { useAppSelector } from '@/redux/hooks'
import { setActiveSession } from '@/redux/sessionsReducer'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import ActionButton from './action-button'
import { addSession } from '@/redux/sessionsReducer'
import { useAppDispatch } from '@/redux/hooks'

export default function Sessions() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    if (sessions) {
        return (
            <div className='grid content-start gap-6 py-2'>
                <div className='sticky top-0 grid bg-slate-300 dark:bg-zinc-900 grid-flow-col gap-6 h-16 items-center justify-between border-b border-slate-200 dark:border-zinc-800'>
                    <h2 className='text-slate-300 text-xl font-bold tracking-tight'>Chat sessions</h2>
                    <ActionButton
                        icon={<PlusCircleIcon />}
                        onClick={() => dispatch(addSession())}
                    />
                </div>
                <div className='grid content-start gap-6'>
                    {
                        sessions && Object.keys(sessions).reverse().map((s:string, s_index:number) => {
                            let name = 'New chat session'

                            if (Object.keys(sessions[s_index].messages).length > 0) {
                                name = sessions[s_index].messages[Object.keys(sessions[s_index].messages)[0]].message
                            }

                            return (
                                <div 
                                    onClick={() => dispatch(setActiveSession(s_index))} 
                                    key={s_index} 
                                    className='grid cursor-pointer border-dashed pb-6 border-b border-slate-200 dark:border-zinc-800'
                                >
                                    <p className={`${activeSession === s_index ? 'text-blue-400' : 'text-slate-300'} hover:text-blue-400 text-base font-medium tracking-tight`}>{name}</p>
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