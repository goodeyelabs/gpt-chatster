import { cloneElement } from 'react';

type buttonProps = {
    icon: any,
    onClick?: any,
    size?: string,
}

function RoundButton({ icon, size, onClick }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: `h-auto ${size === 'small' ? 'w-5' : 'w-6'} text-stone-400/90 group-hover:text-stone-200`},
    )

    return (
        <div 
            className={`grid place-content-center cursor-pointer ${size === 'small' ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-stone-700/60 hover:bg-stone-700/100 group transition-all ease-in-out`}
            onClick={onClick || null}
        >
            {styledIcon}
        </div>
    )
}

export default RoundButton