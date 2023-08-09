'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

export default function PageTitle() {
    const pathname = usePathname();

    useEffect(() => {
        document.title = `${pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2) + (pathname !== '/' ? ' - ' : '')}GPT Chatty`
    }, [pathname])

    return null
}