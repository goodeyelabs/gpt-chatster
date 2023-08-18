import { setScrollMain } from "@/redux/commonReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveSession } from "@/redux/sessionsReducer";

function List({ closeOverlay }: { closeOverlay?:any}) {
    const { activeSession, sessions } = useAppSelector(state => state.sessions.data)
    const dispatch = useAppDispatch();

    let output:object[] = []

    Object.keys(sessions).map((val:string, idx:number, ary:string[]) => {
        return output.push(sessions[idx])
    })
    output = output.reverse()
    
    const handleClick = (index:number) => {
        dispatch(setActiveSession(index))
        dispatch(setScrollMain(true))
        closeOverlay()
    }

    return (
        <>
            {
                output.map((c:any, c_idx:number) => {
                    return (
                        <div key={c_idx} onClick={() => handleClick(c_idx)} className='cursor-pointer'>
                            <p>{(c.messages && c.messages[0]) ? c.messages[0].message : 'New conversation'}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default function Conversations({ closeOverlay }: { closeOverlay?:any}) {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen h-screen-ios overflow-y-auto">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white h-[4rem] px-5 md:px-8 xl:px-12 2xl:px-16 items-center">
                <p onClick={closeOverlay}>Close this modal</p>
            </div>
            <div className="grid grid-rows-[1fr_auto]">
                <div className="grid items-start content-start gap-8">
                    <List closeOverlay={closeOverlay} />
                </div>
                <div className="grid sticky bottom-0 min-h-[4rem] border-t border-neutral-200 bg-white items-center">
                    <p>How the font size?</p>
                </div>
            </div>
        </div>
    )
}