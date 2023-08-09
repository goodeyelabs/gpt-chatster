'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import { createPortal } from 'react-dom';

type overlayProps = {
    content: ReactElement,
    overlayType: string,
    children?: any,
}

export default function Overlay({ children, content, overlayType }:overlayProps) {
    const bodyEl = document.body;
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
                    <div className={`${!overlayIsClosing ? 'animate-slide-in-from-right' : 'animate-slide-out-to-right'} grid z-20 w-[90%] sm:w-[450px] h-screen overflow-y-auto bg-white justify-self-end shadow-xl`}>
                        {newContent}
                    </div>
                )
            case 'drawer-left':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-slide-in-from-left' : 'animate-slide-out-to-left'} grid z-20 w-[90%] sm:w-[450px] h-screen overflow-y-auto bg-white justify-self-start shadow-xl`}>
                        {newContent}
                    </div>
                )
            case 'popup':
                return (
                    <div className={`${!overlayIsClosing ? 'animate-pop-up-from-bottom' : 'animate-pop-down-to-bottom'} grid z-20 w-[95%] md:w-[650px] h-[60vh] md:h-[500px] mb-[2.5%] md:mb-0 bg-white justify-self-center self-end md:self-center rounded-2xl sm:rounded-xl shadow-xl`}>
                        {newContent}
                    </div>
                )
            default:
                return null
        }
    }

    function Wrapper() {
        return (
            <div id='overlay_wrapper' className='fixed grid w-screen h-full z-50 inset-0 grid-flow-col overscroll-contain'>
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
              bodyEl.classList.remove('modal-open');
          }, 250)
  
          return () => clearTimeout(timer);
      }
    }, [overlayIsClosing, bodyEl.classList]);

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
                    {onClick: () => setOverlayIsOpen(true)}
                )}
                {overlayIsOpen && createPortal(
                    <Wrapper />,
                    bodyEl
                )}
            </>
        )
    }

    return null
}