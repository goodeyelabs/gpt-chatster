'use client'
import { useAppSelector } from '@/redux/hooks'
import { setActiveSession } from '@/redux/sessionsReducer'
import { addSession } from '@/redux/sessionsReducer'
import { useAppDispatch } from '@/redux/hooks'
import RoundButton from './round-button'
import { ChatBubbleLeftIcon, PlusIcon } from '@heroicons/react/24/outline'
import { setScrollMain } from '@/redux/commonReducer'

export default function Sessions() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    function handleClick(index:number) {
        dispatch(setActiveSession(index))
        dispatch(setScrollMain(true))
    }

    if (sessions) {
        return (
            <div className='grid content-start gap-4 px-8 py-6 h-full overflow-y-auto'>
                <div className='grid grid-cols-[auto_1fr] grid-flow-col justify-between justify-items-end pb-2'>
                    <div className='grid col-start-1 row-start-1 grid-flow-col gap-2 items-center justify-start select-none cursor-pointer'>
                        <ChatBubbleLeftIcon className='dark:text-stone-400 w-4 h-4'/>
                        <p className='truncate text-zinc-800 dark:text-stone-400 font-medium uppercase tracking-wider text-sm'>Sessions</p>
                    </div>
                    <div className='grid col-start-2 row-start-1 grid-flow-col gap-3 items-center justify-start select-none cursor-pointer'>
                        <RoundButton size='normal' icon={<PlusIcon onClick={() => dispatch(addSession())} />} />
                    </div>
                </div>
                {
                    sessions && Object.keys(sessions).reverse().map((s:string, s_index:number) => {
                        let name = 'New chat session'

                        if (Object.keys(sessions[s_index].messages).length > 0) {
                            name = sessions[s_index].messages[Object.keys(sessions[s_index].messages)[0]].message
                        }

                        return (
                            <div 
                                className={`${activeSession === s_index ? 'bg-stone-700/60' : 'bg-stone-900/90'} hover:bg-stone-700/60 group transition-all ease-in-out grid cursor-pointer px-5 py-3 rounded-[20px]`}
                                onClick={() => handleClick(s_index)} 
                                key={s_index} 
                            >
                                <p className={`${activeSession === s_index ? 'text-slate-200' : 'text-slate-400'} group-hover:text-slate-200 text-sm font-medium tracking-tight`}>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    return null
}