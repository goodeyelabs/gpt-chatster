'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

type overlayProps = {
    content: ReactElement,
    overlayType: string,
    children?: any,
    title?: string,
}

export default function Overlay({ children, content, overlayType, title }:overlayProps) {
    const [overlayIsOpen, setOverlayIsOpen] = useState(false);
    const [overlayIsClosing, setOverlayIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const newContent = React.cloneElement(
        content,
        {closeOverlay: closeOverlay}
    )

    function Content() {
        switch(overlayType) {
            case 'drawer-right':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-slide-in-from-right' : 'animate-slide-out-to-right'} grid z-20 w-[90%] sm:w-[450px] h-screen overflow-y-auto bg-white justify-self-end shadow-xl grid-rows-[auto_1fr] items-start`}>
                        <Header />
                        {newContent}
                    </div>
                )
            case 'drawer-left':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-slide-in-from-left' : 'animate-slide-out-to-left'} grid z-20 w-[90%] sm:w-[450px] h-screen overflow-y-auto bg-white justify-self-start shadow-xl grid-rows-[auto_1fr] items-start`}>
                        <Header />
                        {newContent}
                    </div>
                )
            case 'popup':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-pop-up-from-bottom' : 'animate-pop-down-to-bottom'} grid z-20 w-[95%] md:w-[650px] h-[60vh] md:h-[500px] mb-[2.5%] md:mb-0 bg-white justify-self-center self-end md:self-center rounded-2xl sm:rounded-xl shadow-xl items-start`}>
                        <Header />
                        {newContent}
                    </div>
                )
            case 'menu':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-pop-up-from-bottom' : 'animate-pop-down-to-bottom'} grid absolute z-20 w-auto h-auto justify-self-center self-center shadow-xl`}>
                        {newContent}
                    </div>
                )
            default:
                return null
        }
    }

    function Header() {
        return (
            <div className='grid grid-rows-[5rem] grid-cols-[auto_1fr] grid-flow-col items-center justify-between justify-items-end px-8 border-b border-slate-200 dark:border-neutral-800/80'>
                <div className='group grid col-start-1 row-start-1 grid-flow-col gap-2 items-center justify-start select-none cursor-pointer'>
                    <p className='truncate text-zinc-800 dark:text-slate-100 font-bold text-xl tracking-tight'>{title}</p>
                </div>
                <div className='grid place-content-center h-[4rem] w-[4rem]'>
                    <XMarkIcon onClick={() => closeOverlay()} className='x-6 h-6 text-zinc-900 dark:text-stone-50 cursor-pointer hover:text-blue-400 dark:hover:text-blue-400'/>
                </div>
            </div>
        )
    }

    function Wrapper() {
        return (
            <div id='overlay_wrapper' className='fixed grid w-screen h-full z-50 inset-0'>
                <div id='overlay_background' className={`${!overlayIsClosing ? 'animate-fade-in' : 'animate-fade-out'} z-10 absolute inset-0 cursor-pointer bg-black/[0.8] w-screen h-screen`} onClick={closeOverlay} />
                <Content />
            </div>
        )
    }

    function closeOverlay() {
        setOverlayIsClosing(true);
    }
  
    useEffect(() => {
      if (overlayIsClosing) {
          const timer = setTimeout(() => {
              setOverlayIsOpen(false);
              setOverlayIsClosing(false);
          }, 250)
  
          return () => clearTimeout(timer);
      }
    }, [overlayIsClosing]);

    useEffect(() => {
        function handleEsc(event: any) {
            if (event.keyCode === 27) closeOverlay();
        }
        window.addEventListener('keydown', handleEsc);
  
        return () => window.removeEventListener('keydown', handleEsc);
    },[]);

    useEffect(() => {
        setIsMounted(true);
    },[setIsMounted])

    if (isMounted) {
        return (
            <>
                {React.cloneElement(
                    children,
                    {
                        onClick: () => setOverlayIsOpen(true),
                    }
                )}
                {overlayIsOpen && createPortal(
                    <Wrapper />,
                    document.body
                )}
            </>
        )
    }

    return (
        <>
            {children}
        </>    
    )
}