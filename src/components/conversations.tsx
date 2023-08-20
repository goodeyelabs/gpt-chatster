'use client'
import { setScrollMain } from "@/redux/commonReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveSession } from "@/redux/sessionsReducer";
import { orderSessionsByCreateDate } from "@/tools/utils";
import { useEffect } from "react";

function List({ closeOverlay }: { closeOverlay?:any}) {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    const list = orderSessionsByCreateDate(sessions)
    
    const handleClick = (index:number) => {
        dispatch(setActiveSession(index))
        dispatch(setScrollMain(true))
    }

    return (
            <div className='grid'>
                {
                    list.map((c:any, c_idx:number) => {
                        return (
                            <div 
                                key={c_idx} 
                                onClick={() => handleClick(c_idx)} 
                                className={`grid cursor-pointer px-5 md:px-6 xl:px-12 transition-all ease-in-out ${activeSession === c_idx ? 'bg-blue-100/30 hover:bg-blue-100/30 cursor-default' : 'hover:bg-neutral-100/40'}`}
                            >
                                <div className={`grid border-t py-6 ${activeSession === c_idx || activeSession === c_idx - 1 ? 'border-white' : 'border-neutral-200 border-dashed'}`}>
                                    <p className={`text-sm font-medium text-neutral-700 leading-relaxed ${activeSession === c_idx ? 'text-neutral-950' : ''}`}>
                                        {(c.messages && c.messages[0]) ? c.messages[0].message : 'New conversation'}
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

// export default function Conversations({ closeOverlay }: { closeOverlay?:any}) {
//     return (
//         <div className="grid grid-rows-[auto_1fr] h-full overflow-y-auto">
//             <div className="grid sticky top-0 border-b border-gray-200 bg-white h-[4rem] px-5 md:px-8 xl:px-12 2xl:px-16 items-center">
//                 <p onClick={closeOverlay}>Close this modal</p>
//             </div>
//             <div className="grid grid-rows-[1fr_auto]">
//                 <div className="grid items-start content-start gap-8">
//                     <List closeOverlay={closeOverlay} />
//                 </div>
//                 <div className="grid sticky bottom-0 min-h-[4rem] border-t border-neutral-200 bg-white items-center">
//                     <p>How the font size?</p>
//                 </div>
//             </div>
//         </div>
//     )
// }