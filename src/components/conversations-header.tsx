'use client'
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import { useAppDispatch } from "@/redux/hooks";
import { addSession } from "@/redux/sessionsReducer";

export default function ConversationsHeader() {
    const dispatch = useAppDispatch()

    return (
        <div className='grid h-[var(--sub-header-height)] gap-3 grid-flow-col px-5 md:px-6 xl:pl-12 xl:pr-8 items-center bg-white'>
            <div className='grid grid-cols-[1fr_auto] gap-3 grid-flow-col items-center'>
                <p className="text-md text-neutral-800 font-semibold tracking-normal">Conversations</p>
                <Button 
                    icon={<PencilSquareIcon />} 
                    text='New'
                    onClick={() => dispatch(addSession())}
                /> 
                {/* <div className='grid min-h-[40px] items-center py-2 px-4 bg-white shadow-[inset_0_0_0_1px] shadow-neutral-200 rounded-[calc(40px/2)]'>
                    <textarea                         
                        rows={1}
                        placeholder='Search conversations' 
                        className='grid w-full resize-none text-sm font-medium tracking-slight bg-white text-neutral-600 placeholder:text-neutral-400 appearance-none outline-none overflow-y-hidden'>
                    </textarea>
                </div> */}
            </div> 
        </div>
    )
}