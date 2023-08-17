import { cloneElement } from 'react';

type buttonProps = {
    text?: string,
    icon?: any,
    classProp?: string,
    onClick?: any,
    noBackground?: boolean,
}

function Button({ icon, text, classProp, onClick, noBackground }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: classProp || 'h-6 w-6 dark:text-stone-400/90 dark:group-hover:text-stone-200'},
    )

    return (
        <button 
            onClick={onClick || null} 
            className={`grid place-content-center items-center gap-2 group cursor-pointer h-[40px] grid-flow-col text-sm font-medium tracking-tight text-neutral-600 hover:text-neutral-700 dark:text-stone-400/90 dark:hover:text-stone-200 ${!noBackground ? 'bg-neutral-100 hover:bg-neutral-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700' : ''} px-4 pl-3 transition-all duration-75 ease-in-out rounded-[20px] border-0 outline-none select-none`}
        >
            {styledIcon}
            {
                text &&
                    <span className='truncate'>{text}</span>
            }
        </button>
    )
}

export default Button