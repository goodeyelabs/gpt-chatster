import { cloneElement } from 'react';

type buttonProps = {
    text?: string,
    icon?: any,
    classProp?: string,
    onClick?: any,
}

function Button({ icon, text, classProp, onClick }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: classProp || 'h-5 w-5 text-white'},
    )

    return (
        <button onClick={onClick || null} className='group cursor-pointer hidden md:grid grid-flow-col gap-0 text-sm font-semibold text-white pl-0 pr-0 py-2 bg-gradient-to-r from-[var(--color-light-blue)] to-[var(--color-dark-blue)] hover:bg-gradient-to-l transition-all duration-75 rounded-md border-0 outline-none select-none'>
            {styledIcon}
            {/* {
                text &&
                    <span>{text}</span>
            } */}
        </button>
    )
}

export default Button