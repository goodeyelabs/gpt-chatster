import { cloneElement } from 'react';

type buttonProps = {
    text?: string,
    icon?: any,
    customClass?: string,
    onClick?: any,
    dontHideText?:boolean,
}

function Button({ icon, text, customClass, onClick, dontHideText }:buttonProps) {
    const styledIcon = icon ? cloneElement(icon, {className: 'h-5 w-5'}) : null

    return (
        <button 
            onClick={onClick || null} 
            className={`grid place-content-center items-center gap-2 group cursor-pointer h-[40px] ${dontHideText ? 'w-auto' : 'w-[40px] md:w-auto'} grid-flow-col text-gray-700 dark:text-neutral-400 bg-slate-200/20 dark:bg-neutral-950/20 hover:brightness-75 dark:hover:brightness-100 dark:hover:bg-neutral-950/50 text-sm font-medium tracking-slight justify-items-center px-3 ${text ? 'pr-3' : 'pr-3'} transition-all duration-75 ease-in-out rounded-[20px] border-0 outline-none select-none `}
        >
            {
                icon &&
                    styledIcon
            }
            {
                text &&
                    <span className={`${dontHideText ? 'grid' : 'hidden md:grid'} truncate`}>{text}</span>
            }
        </button>
    )
}

export default Button