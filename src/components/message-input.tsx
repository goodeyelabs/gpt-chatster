'use client'
import { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Button from './button'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addMessage, setCurrentPrompt } from '@/redux/sessionsReducer'

export default function MessageInput() {   
    const textareaRef = useRef<HTMLTextAreaElement>(null); 
    const dispatch = useAppDispatch();
    const { currentPrompt, activeSession } = useAppSelector(state => state.sessions.data)
    const [gptResponse, setGptResponse] = useState(false)

    function handleMessageChange(val:string) {
        dispatch(setCurrentPrompt(val))
    }

    function handleSubmit() {
        dispatch(addMessage({sessionID: activeSession, author: 'user', message: currentPrompt}))
        setGptResponse(true)
    }

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px'
          }
    },[textareaRef, currentPrompt])

    useEffect(() => {
        if (gptResponse) {
            const res = setTimeout(() => {
                dispatch(addMessage({sessionID: activeSession, author: 'server', message: 'RedactGPT here, I don\'t know what you mean! Please rephrase what you want to ask.'}))
                setGptResponse(false)
            }, 2000)
    
            return () => clearTimeout(res);
        }
      }, [gptResponse]);

    return (
        <div className='w-full sticky bottom-0 grid pb-10 bg-zinc-900'>
            <div className='w-full grid grid-flow-col items-end text-zinc-800 dark:text-stone-300 bg-stone-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg'>
                <textarea 
                    ref={textareaRef}
                    autoFocus
                    value={currentPrompt} 
                    onChange={event => handleMessageChange(event.currentTarget.value)}
                    rows={1}
                    placeholder='How can I help?' 
                    className='resize-none w-full px-6 py-3 font-medium tracking-tight text-lg text-left bg-transparent appearance-none outline-none'>
                </textarea>
                <Button
                    icon={<PaperAirplaneIcon />}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )

    return null
}