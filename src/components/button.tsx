import { cloneElement } from 'react';

type buttonProps = {
    text: string,
    icon?: any,
    classProp?: string,
    onClick?: any,
}

function Button({ icon, text, classProp, onClick }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: classProp || 'h-5 w-5 text-white', onClick: onClick || null},
    )

    return (
        <button className='group cursor-pointer hidden md:grid grid-flow-col gap-2 text-sm font-semibold text-white pl-3 pr-4 py-2 bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-purple)] hover:bg-gradient-to-l transition-all duration-75 rounded-lg border-0 outline-none select-none'>
            {styledIcon}
            <span>{text}</span>
        </button>
    )
}

export default Button