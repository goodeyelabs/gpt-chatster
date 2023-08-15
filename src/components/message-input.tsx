'use client'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Button from './button'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addMessage, setCurrentPrompt } from '@/redux/sessionsReducer'

export default function MessageInput() {   
    const textareaRef = useRef<HTMLTextAreaElement>(null); 
    const dispatch = useAppDispatch();
    const { currentPrompt, activeSession } = useAppSelector(state => state.sessions.data)

    function handleMessageChange(val:string) {
        dispatch(setCurrentPrompt(val))
    }

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px'
          }
    },[textareaRef, currentPrompt])

    // useEffect(() => {
    //     function handleEnter(event: any) {
    //         if (event.keyCode === 13 && !event.shiftKey) {
    //             dispatch(setMessages(currentPrompt))
    //             event.preventDefault()
    //         }
    //     }
    //     window.addEventListener('keydown', handleEnter)
  
    //     return () => window.removeEventListener('keydown', handleEnter)
    // },[]);

    return (
        <>
            <textarea 
                ref={textareaRef}
                autoFocus
                value={currentPrompt} 
                onChange={event => handleMessageChange(event.currentTarget.value)}
                rows={1}
                placeholder='How can I help?' 
                className='resize-none w-full px-6 py-3 rounded-lg font-normal tracking-tight text-2xl text-left text-zinc-800 dark:text-stone-300 bg-stone-100 dark:bg-zinc-800 border-none appearance-none outline-none'>
            </textarea>
            <Button
                icon={<PaperAirplaneIcon />}
                text='Send'
                onClick={() => dispatch(addMessage({sessionID: activeSession, message: currentPrompt}))}
            />
        </>
    )

    return null
}