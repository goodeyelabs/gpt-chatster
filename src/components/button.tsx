import { cloneElement } from 'react';

type buttonProps = {
    text?: string,
    icon?: any,
    customClass?: string,
    onClick?: any,
}

function Button({ icon, text, customClass, onClick }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: 'h-5 w-5'},
    )

    const customStyleInsert = customClass ? customClass : ''

    return (
        <button 
            onClick={onClick || null} 
            className={`grid place-content-center items-center gap-2 group cursor-pointer h-[40px] w-[40px] md:w-auto grid-flow-col text-neutral-600 dark:text-stone-400/90 bg-neutral-100 dark:bg-zinc-800/80 hover:brightness-95 text-sm font-medium px-4 pl-4 transition-all duration-75 ease-in-out rounded-[20px] border-0 outline-none select-none ${customStyleInsert}`}
        >
            {
                icon &&
                    styledIcon
            }
            {
                text &&
                    <span className='truncate hidden md:grid'>{text}</span>
            }
        </button>
    )
}

export default Button