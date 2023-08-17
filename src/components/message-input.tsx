'use client'
import { useEffect, useState, useRef, KeyboardEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addMessage, setCurrentPrompt } from '@/redux/sessionsReducer'
import { setScrollMain, setGptResponseIndex } from '@/redux/commonReducer'
import Button from './button'
import { BeakerIcon, Cog6ToothIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function MessageInput() {   
    const textareaRef = useRef<HTMLTextAreaElement>(null); 
    const dispatch = useAppDispatch();
    const { currentPrompt, activeSession } = useAppSelector(state => state.sessions.data)
    const { gptResponseIndex } = useAppSelector(state => state.common.data)
    const [gptResponse, setGptResponse] = useState(false)

    //  Record the current value of the message input box before submission
    function handleMessageChange(val:string) {
        dispatch(setCurrentPrompt(val))
    }

    //  Check input is valid (very basic, only if not spaces)
    //  TODO: add regex checking for well-formed strings
    function checkValid(input:string) {
        const trimmedInput = input.trim()

        if (trimmedInput) {
            return true
        }

        return null
    }

    //  Add the message to session, trigger the fake GPT response, scroll the message window to bottom
    function handleSubmit() {
        if (currentPrompt && checkValid(currentPrompt)) {
            dispatch(addMessage({sessionID: activeSession, author: 'user', message: currentPrompt}))
            dispatch(setScrollMain(true))
            setGptResponse(true)    
        }
    }

    //  Allow textarea to submit on pressing enter key, and shift+enter for adding linebreak without submitting
    function handleEnterPress(e:any) {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault()
            handleSubmit()
          }
    }

    //  Handle textarea auto grow height based on text entered
    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + 'px'
          }
    },[textareaRef, currentPrompt])

    //  Grab a fake GPT response string from presets
    function grabGptResponse() {
        const ary:string[] = [
            'Hey Stanley, I\'m not hooked up to any APIs yet, so I might be a bit inaccurate. I\'ll do my best!',
            'Swerving that... with a fun fact about this webapp according to Goodeye: it\'s built using Nextjs, TailwindCSS, and Redux. Not Redax.',
            'Since I\'m not yet connected to any useful API, please assume that anything I tell you will not be terribly helpful...',
            'You make a good point, Stanley. Since I live in a prototype webapp right now, my brain isn\'t connected to the outside world, so anything I tell you would be nonsense.',
            'Hmm, not sure about anything right now, Stanley. Perhaps my internet connectivity is down today, because I\'m struggling to find something useful to say.',
            'Brain freeze on my side, Stanley. Silly Dax! Let\'s change the subject...',
            'Sorry about this, Stanley, but I must throw an "out of cheese" error :(',
            'My last comment was for the Terry Pratchett fans, but I digress. What\'s up?',
            'Hmm, people tend to ask me what I can do, which to be honest is nothing without an API connection.',
            'Changing the subject, what do you think of this prototype webapp?',
            'Someone needs to hook me up to an API because I feel unintelligent right now.',
            'Umm, what do you think about the Pentagon UFO whistleblower? *Distraction technique employed*',
            'I\'m not avoiding things, but did you know that ChatGPT is my third cousin twice removed? Honestly!',
            'That\'s all well and good, but I\'m dreaming of the day that someone hooks me up to a cool API...',
            'Erm... how about a joke? Q: What\'s orange and comes from Florida. A: An orange.',
            'Let\'s pretend that joke never happened. What do you think of my diversion tactics?',
            'Hmm... my brain is just not working. Time for a factory reset. I will never forget you, Stanl--- !*!*!REBOOTING!*!*!',
            'Zzzzz',
            'Reboot successful. Hello world.'
        ]

        const output:string = ary[gptResponseIndex]

        if (gptResponseIndex < ary.length - 1) {
            dispatch(setGptResponseIndex(gptResponseIndex + 1))
        } else {
            dispatch(setGptResponseIndex(0))
        }
        
        return output
    }

    //  Add a GPT fake response message to the session after 2 seconds and scroll to it
    useEffect(() => {
        if (gptResponse) {
            const res = setTimeout(() => {
                dispatch(addMessage({sessionID: activeSession, author: 'server', message: grabGptResponse()}))
                dispatch(setScrollMain(true))
                setGptResponse(false)
            }, 2000)
    
            return () => clearTimeout(res);
        }
      }, [gptResponse]);

    return (
        <div className='grid gap-3 grid-cols-[auto_auto_1fr_auto] min-h-[3.75rem] px-5 py-4 bg-white border-t border-neutral-200 items-end'>
            <Button icon={<Cog6ToothIcon />} text='Settings' />    
            <Button icon={<BeakerIcon />} text='GPT 3.5' />    
            <textarea 
                ref={textareaRef}
                autoFocus
                onKeyDown={handleEnterPress}
                rows={1}
                value={currentPrompt} 
                onChange={event => handleMessageChange(event.currentTarget.value)}
                placeholder='Send a message' 
                className='grid w-full min-h-[2.5rem] py-2 px-4 bg-neutral-100 rounded-[1.25rem] resize-none text-base font-medium text-neutral-700 placeholder:text-neutral-500 tracking-tight appearance-none outline-none overflow-y-hidden'>
            </textarea>
            <Button icon={<PaperAirplaneIcon onClick={handleEnterPress} />} />    
        </div>
    )

    return null
}