import View from '../components/view'
import { Metadata } from 'next'
import ChatInput from '@/components/message-input'
import Sessions from '@/components/sessions'
import Messages from '@/components/messages'
import Settings from '@/components/settings'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'RedactGPT - Goodeye Labs',
}

export default function Home() {
    return (
        <View noFooter>
            <div className='grid w-full h-full grid-cols-[1fr_400px]'>
                <div className=' grid h-full w-full px-20 py-8 grid-rows-[auto_1fr_auto] items-center'>
                    <Settings />
                    <Messages />
                    <ChatInput /> 
                </div>
                <div className='grid h-full w-full border-l border-slate-200 dark:border-zinc-800 px-12 py-8'>
                    <Sessions />
                    <Footer />
                </div>
            </div>
        </View>
    )
}
