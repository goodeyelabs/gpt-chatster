'use client'
import { setScrollMain } from "@/redux/commonReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveChat } from "@/redux/sessionsReducer";

export default function Conversations({ closeOverlay }: { closeOverlay?:any}) {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    const list = sessions.slice().reverse()

    function handleClick(index:number) {
        dispatch(setActiveChat(index))
        dispatch(setScrollMain(true))
        closeOverlay()
    }

    return (
        <div className='grid'>
            {
                list.map((c:any, c_idx:number) => {
                    const s = c.messages

                    return (
                        <div 
                            key={c_idx} 
                            onClick={() => handleClick(c.sessionID)} 
                            className={`grid cursor-pointer px-5 md:px-6 xl:px-8 transition-all ease-in-out ${activeSession === c.sessionID ? 'bg-slate-100 dark:bg-redax-light hover:bg-slate-100 cursor-default' : ' hover:bg-slate-100 dark:hover:bg-redax-light'}`}
                        >
                            <div className={`grid border-t py-6 px-3 ${activeSession === c.sessionID || activeSession === c.sessionID + 1 ? 'border-blue-50 dark:border-redax-light' : 'border-neutral-300/50 dark:border-redax-lighter border-dashed'}`}>
                                <p className={`line-clamp-3 text-sm font-base text-gray-950 dark:text-stone-300/90 leading-normal md:leading-relaxed tracking-slight ${activeSession === c.sessionID ? 'text-neutral-950 dark:text-stone-200' : ''}`}>
                                    {(s[1]) ? s[1].message : 'New chat session'}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}