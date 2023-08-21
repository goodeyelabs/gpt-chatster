'use client'
import { setScrollMain } from "@/redux/commonReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveChat } from "@/redux/sessionsReducer";
import { orderSessionsByCreateDate } from "@/tools/utils";
import { useEffect } from "react";

function List({ closeOverlay }: { closeOverlay?:any}) {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    const list = sessions.slice().reverse()

    const handleClick = (index:number) => {
        dispatch(setActiveChat(index))
        dispatch(setScrollMain(true))
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
                                className={`grid cursor-pointer px-5 md:px-6 xl:px-8 transition-all ease-in-out ${activeSession === c.sessionID ? 'bg-slate-100 dark:bg-redax-light hover:bg-blue-100/30 cursor-default' : 'hover:bg-neutral-100/40 dark:hover:bg-redax-light'}`}
                            >
                                <div className={`grid border-t py-6 px-3 ${activeSession === c.sessionID || activeSession === c.sessionID + 1 ? 'border-white dark:border-redax-light' : 'border-neutral-200 dark:border-redax-lighter border-dashed'}`}>
                                    <p className={`text-sm font-medium text-neutral-700 dark:text-stone-300 leading-relaxed ${activeSession === c.sessionID ? 'text-neutral-950 dark:text-stone-300' : ''}`}>
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

export default function Conversations({ closeOverlay }: { closeOverlay?:any}) {
    return (
        <List closeOverlay={closeOverlay} />
    )
}