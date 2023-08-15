'use client'
import { useAppSelector } from '@/redux/hooks'
import { setActiveSession } from '@/redux/sessionsReducer'
import { useAppDispatch } from '@/redux/hooks'

export default function Sessions() {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    if (sessions) {
        return (
            <div className='grid content-start'>
                <h2 className='text-slate-300 text-2xl font-bold tracking-tight'>Chat sessions</h2>
                <div className='grid content-start'>
                    {
                        sessions && Object.keys(sessions).reverse().map((s:string, s_index:number) => {
                            let name = 'New chat session - ' + s_index
                            if (Object.keys(sessions[s_index].messages).length > 0) {
                                name = sessions[s_index].messages[Object.keys(sessions[s_index].messages)[0]].message + ' - ' + s_index
                            }

                            return (
                                <div 
                                    onClick={() => dispatch(setActiveSession(s_index))} 
                                    key={s_index} 
                                    className='grid cursor-pointer'
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