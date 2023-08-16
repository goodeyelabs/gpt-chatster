import { cloneElement } from 'react';

type buttonProps = {
    icon: any,
    onClick?: any,
    size?: string,
    startColor?: string,
}

function RoundButton({ icon, size, onClick, startColor }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: `h-auto ${size === 'small' ? 'w-5' : 'w-6'} text-slate-500 dark:text-stone-400/90 group-hover:text-slate-700 dark:group-hover:text-stone-200`},
    )

    return (
        <div 
            className={`grid place-content-center cursor-pointer ${size === 'small' ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 group transition-all ease-in-out`}
            onClick={onClick || null}
        >
            {styledIcon}
        </div>
    )
}

export default RoundButton