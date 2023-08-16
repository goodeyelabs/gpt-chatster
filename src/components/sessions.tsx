'use client'
import { useAppSelector } from '@/redux/hooks'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useAppDispatch } from '@/redux/hooks'
import { setScrollMain } from '@/redux/commonReducer'

export default function Sessions() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    //  Set the main panel to the chosen chat session and scroll to bottom
    function handleClick(index:number) {
        dispatch(setActiveSession(index))
        dispatch(setScrollMain(true))
    }

    if (sessions) {
        let output:object[] = []
        
        Object.keys(sessions).map((val:string, idx:number, ary:string[]) => {
            return output.push(sessions[idx])
        })

        output = output.reverse()

        return (
            <div className='grid content-start gap-4 px-8 py-8 h-full overflow-y-auto'>
                {
                    sessions && Object.keys(sessions).sort((a,b) => Number(b) - Number(a)).map((s:string, s_index:number) => {
                        let name = 'New chat session'

                        if (Object.keys(sessions[s_index].messages).length > 0) {
                            name = sessions[s_index].messages[0].message
                        }

                        return (
                            <div 
                                className={`${activeSession === s_index ? 'bg-slate-400 dark:bg-slate-700' : 'bg-transparent hover:bg-slate-100 dark:hover:bg-stone-800'} group transition-all ease-in-out grid cursor-pointer px-5 py-3 rounded-[10px]`}
                                onClick={() => handleClick(s_index)} 
                                key={s_index} 
                            >
                                <p className={`${activeSession === s_index ? 'text-white dark:text-stone-100' : 'text-slate-500 dark:text-slate-400'} text-sm font-medium tracking-tight`}>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    //  TODO: Add empty styling, e.g. encourage to create a new chat session
    return null
}