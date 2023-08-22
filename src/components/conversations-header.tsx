'use client'
import { MagnifyingGlassIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import { useAppDispatch } from "@/redux/hooks";
import { addChat } from "@/redux/sessionsReducer";

export default function ConversationsHeader() {
    const dispatch = useAppDispatch()

    return (
        <div className='grid h-[var(--sub-header-height)] gap-3 grid-flow-col px-5 md:px-6 xl:pl-8 xl:pr-8 items-center'>
            <div className='grid grid-cols-[1fr_auto] gap-3 grid-flow-col items-center'>
                <div className='grid gap-1 grid-cols-[auto_1fr] min-h-[40px] items-center py-2 px-4 bg-white dark:bg-redax-lighter shadow-[inset_0_0_0_1px] shadow-neutral-300/60 dark:shadow-redax-lighter rounded-[calc(40px/2)]'>
                    <MagnifyingGlassIcon className='w-4 h-4 text-neutral-400' />
                    <textarea                         
                        rows={1}
                        placeholder='Search chats...' 
                        className='grid w-full resize-none text-sm font-medium tracking-slight bg-white dark:bg-redax-lighter text-neutral-600 dark:text-neutral-300 placeholder:text-neutral-400 appearance-none outline-none overflow-y-hidden'>
                    </textarea>
                </div>
                <Button 
                    icon={<PencilSquareIcon />} 
                    text='New'
                    onClick={() => dispatch(addChat())}
                />
            </div>
        </div>
    )
}