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
            <div className='grid content-start gap-4 px-5 sm:px-8 py-3'>
                {
                    sessions && Object.keys(sessions).sort((a,b) => Number(b) - Number(a)).map((s:string, s_index:number) => {
                        let name = 'New chat session'

                        if (Object.keys(sessions[s_index].messages).length > 0) {
                            name = sessions[s_index].messages[0].message
                        }

                        return (
                            <div 
                                className={`${activeSession === s_index ? 'bg-white shadow-[0_0_0_1px] shadow-slate-300 dark:bg-neutral-800' : 'bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900'} group transition-all ease-in-out leading-relaxed grid cursor-pointer px-5 py-3 rounded-[10px]`}
                                onClick={() => handleClick(s_index)} 
                                key={s_index} 
                            >
                                <p className={`${activeSession === s_index ? 'text-neutral-600 dark:text-stone-100' : 'text-neutral-500 dark:text-slate-400'} text-sm font-medium leading-relaxed tracking-tight`}>{name}</p>
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