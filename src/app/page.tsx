import View from '../components/view'
import { Metadata } from 'next'
import MessageInput from '@/components/message-input'
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
            <div className='grid grid-cols-[400px_1fr]'>
                <div className='sticky top-16 grid h-[calc(100vh-4rem)] w-full grid-rows-[1fr_auto] border-r border-slate-200 dark:border-zinc-800 px-8 overflow-y-auto'>
                    <Sessions />
                    <Footer />
                </div>
                <div className=' grid gap-4 h-full w-full px-20 grid-rows-[1fr_auto] items-start'>
                    {/* <Settings /> */}
                    <Messages />
                    <MessageInput /> 
                </div>
            </div>
        </View>
    )
}
