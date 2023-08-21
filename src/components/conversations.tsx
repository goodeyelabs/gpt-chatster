'use client'
import { setScrollMain } from "@/redux/commonReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveSession } from "@/redux/sessionsReducer";
import { orderSessionsByCreateDate } from "@/tools/utils";
import { useEffect } from "react";

function List({ closeOverlay }: { closeOverlay?:any}) {
    const { activeSession, newSessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    const list = newSessions.slice().reverse()
    
    const handleClick = (index:number) => {
        dispatch(setActiveSession(index))
        dispatch(setScrollMain(true))
    }

    return (
            <div className='grid'>
                {
                    list.map((c:any, c_idx:number) => {
                        const s = c.newMessages

                        return (
                            <div 
                                key={c_idx} 
                                onClick={() => handleClick(c_idx)} 
                                className={`grid cursor-pointer px-5 md:px-6 xl:px-8 transition-all ease-in-out ${activeSession === c_idx ? 'bg-slate-100 hover:bg-blue-100/30 cursor-default' : 'hover:bg-neutral-100/40'}`}
                            >
                                <div className={`grid border-t py-6 px-3 ${activeSession === c_idx || activeSession === c_idx - 1 ? 'border-white' : 'border-neutral-200 border-dashed'}`}>
                                    <p className={`text-sm font-medium text-neutral-700 leading-relaxed ${activeSession === c_idx ? 'text-neutral-950' : ''}`}>
                                        {(s[0]) ? s[0].message : 'New conversation'}
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