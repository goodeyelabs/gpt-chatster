'use client'
import { useEffect, useState, useRef, KeyboardEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Cog8ToothIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addMessage, setCurrentPrompt } from '@/redux/sessionsReducer'
import { setScrollMain, setGptResponseIndex } from '@/redux/commonReducer'
import RoundButton from './round-button'

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
            'Hello Stanley, I\'m Dax. I\'m not actually hooked up to an API at the moment, so this is a placeholder response. Sorry about that!',
            'Since I am not yet connected to any useful API, please assume that anything I tell you will not be terribly helpful, Stanley...',
            'You make a good point, Stanley. Since I live in a prototype webapp right now, my brain isn\'t connected to the outside world, so anything I tell you would be nonsense.',
            'Swerving that... with a fun fact about this webapp according to Goodeye: it\'s built using Nextjs, TailwindCSS, and Redux. Not Redax.',
            'Hmm, not sure about anything right now, Stanley. Perhaps my internet connectivity is down today, because I\'m struggling to find something useful to say.',
            'Brain freeze on my side, Stanley. Silly Dax! Let\'s change the subject...',
            'Sorry about this, Stanley, but I must throw an "out of cheese" error :(',
            'Hmm, people tend to ask me what I can do, which to be honest is nothing without an API connection.',
            'Changing the subject, what do you think of this prototype webapp?',
            'Someone needs to hook me up to an API because I feel unintelligent right now.',
            'Umm, what do you think about the Pentagon UFO whistleblower? *Distraction technique employed*',
            'I\'m not avoiding things, but did you know that ChatGPT is my third cousin twice removed? Honestly!',
            'That\'s all well and good, but I\'m dreaming of the day that someone hooks me up to a cool API...',
            'Erm... how about a joke? Q: What\'s orange and comes from Florida. A: An orange.',
            'Let\'s pretend that joke never happened. What do you think of my diversion tactics?',
            'Hmm... my brain is just not working. Time for a factory reset. I will not remember you, Stanl--- !*!*!REBOOTING!*!*!'
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
        <div className='sticky bottom-0 bg-white dark:bg-redax-dark min-h-[5rem] py-[19.5px] grid grid-flow-col grid-cols-[auto_1fr_auto] gap-6 border-t border-none border-slate-200 dark:border-neutral-800/80 px-8 items-end'>
            <RoundButton onClick={handleSubmit} icon={<Cog8ToothIcon />} />
            <div className='grid bg-stone-700/60 w-full min-h-[12px] py-2 px-6 items-center rounded-[20px]'>
                <textarea 
                    ref={textareaRef}
                    autoFocus
                    onKeyDown={handleEnterPress}
                    value={currentPrompt} 
                    onChange={event => handleMessageChange(event.currentTarget.value)}
                    rows={1}
                    placeholder='Send a message to RedaxGPT...' 
                    className='resize-none bg-transparent w-full h-full font-medium tracking-tight overflow-y-auto text-stone-200 text-md text-left appearance-none outline-none'>
                </textarea>
            </div>
            <RoundButton startColor='bg-blue-700' onClick={handleSubmit} icon={<PaperAirplaneIcon />} />
        </div>
    )

    return null
}