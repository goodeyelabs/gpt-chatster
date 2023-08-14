'use client'
import { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addPrompt } from '@/redux/promptReducer'

export default function ChatInput() {   
    const textareaRef = useRef<HTMLTextAreaElement>(null); 
    const dispatch = useAppDispatch();
    const { prompt } = useAppSelector(state => state.prompt.data)

    function handlePromptChange(val:string) {
        dispatch(addPrompt(val))
    }

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px';
          }
    },[textareaRef, prompt])
    
    return (
        <form className='grid w-full bg-none'>
            <textarea 
                ref={textareaRef}
                value={prompt} 
                onChange={event => handlePromptChange(event.currentTarget.value)}
                rows={1}
                placeholder='How can I help?' 
                className='resize-none w-full px-6 py-3 rounded-lg font-normal tracking-tight text-2xl text-left text-zinc-800 dark:text-stone-300 bg-stone-100 dark:bg-zinc-800 border-none appearance-none outline-none'>
            </textarea>
        </form>
    ) 
}