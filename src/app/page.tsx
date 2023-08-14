import View from '../components/view'
import { Metadata } from 'next'
import ChatInput from '@/components/message-input'
import Sessions from '@/components/sessions'
import Messages from '@/components/messages'

export const metadata: Metadata = {
    title: 'RedactGPT - Goodeye Labs',
}

export default function Home() {
    return (
        <View>
            <div className='grid w-full h-screen grid-cols-[1fr_350px]'>
                <div className=' grid h-full w-full place-content-center pb-[4rem]'>
                    <Messages />
                    <ChatInput /> 
                </div>
                <div className='grid h-full w-full border-l border-slate-200 dark:border-zinc-800 pl-12 py-8'>
                    <Sessions />
                </div>
            </div>
        </View>
    )
}
