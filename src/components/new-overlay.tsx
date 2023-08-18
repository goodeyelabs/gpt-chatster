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

export default function NewOverlay({ children, content, overlayType, title }:overlayProps) {
    const [overlayIsOpen, setOverlayIsOpen] = useState(false);
    const [overlayIsClosing, setOverlayIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    function closeOverlay() {
        setOverlayIsClosing(true);
    }

    const newContent = React.cloneElement(
        content,
        {closeOverlay: closeOverlay}
    )

    function Wrapper() {
        return (
            <div id='overlay_wrapper' className='fixed inset-0 z-50 grid'>
                <div id='overlay_background' className={`${!overlayIsClosing ? 'animate-fade-in' : 'animate-fade-out'} transform-gpu z-10 absolute inset-0 cursor-pointer bg-zinc-950/[0.8]`} onClick={closeOverlay} />
                <div className={`${!overlayIsClosing ? 'animate-slide-in-from-left' : 'animate-slide-out-to-left'} grid z-20 bg-white w-[80%]`}>
                    {newContent}
                </div>
            </div>
        )
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