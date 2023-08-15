import { cloneElement } from 'react';

type buttonProps = {
    icon?: any,
    classProp?: string,
    onClick?: any,
}

function ActionButton({ icon, classProp, onClick }:buttonProps) {
    const styledIcon = cloneElement(
        icon, {className: classProp || 'h-7 w-7 text-slate-300 dark:text-gray-400 group-hover:text-blue-400 transitition-all ease-in-out'},
    )

    return (
        <button onClick={onClick || null} className='cursor-pointer group'>
            {styledIcon}
        </button>
    )
}

export default ActionButton