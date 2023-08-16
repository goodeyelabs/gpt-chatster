import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { cloneElement } from 'react';

type buttonProps = {
    onClick?: any,
}

function ChatButton({ onClick }:buttonProps) {
    return (
        <button 
            onClick={onClick || null} 
            className='grid place-content-center items-center gap-2 group cursor-pointer h-[40px] grid-flow-col text-sm font-medium tracking-tight text-stone-50 hover:text-stone-100 bg-blue-500 hover:bg-blue-400 px-4 pl-3 transition-all duration-75 ease-in-out rounded-[20px] border-0 outline-none select-none'
        >
            <ChatBubbleLeftIcon className='h-6 w-6 text-stone-50 group-hover:text-stone-100' />
            {
                <span>New chat</span>
            }
        </button>
    )
}

export default ChatButton