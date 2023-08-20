import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"
import Header from "./header"
import Overlay from "./overlay"
import NewHeader from "./new-header"
import Conversations from "./conversations"
import SendFeedback from "./send-feedback"
import ConversationsHeader from "./conversations-header"
import MessagesHeader from "./messages-header"

type viewProps = {
    children?: any,
}

export function SideBar() {
    return (
        <div id='sidebar' className="grid sticky top-0 overflow-y-auto grid-rows-[5rem_1fr_auto] h-full w-full border-r border-slate-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-redax-light">
            <Banner />
            <Sessions />
            <SideFooter />
        </div>
    )
}

export default function View({ children }:viewProps) {    
    return (
        <div className='grid w-screen h-screen h-screen-ios grid-rows-[auto_1fr] grid-cols-[minmax(auto,430px)_1fr]'>
            <div className='grid sticky z-30 top-0 col-start-1 col-span-full shadow-[0_1px_0_0] shadow-gray-200'>
                <NewHeader />
            </div>
            <div className="grid z-10 grid-rows-[auto_1fr] h-full overflow-y-auto shadow-[1px_0_0_0] shadow-gray-200">
                {/* Sidebar Header */}
                <div className="grid sticky top-0">
                    <ConversationsHeader />
                </div>
                <div>
                    <Conversations />
                </div>
                <div className="grid sticky bottom-0">
                    <SendFeedback />
                </div>
            </div>
            <div className="grid h-full overflow-y-auto grid-rows-[auto_1fr]">
                {/* Messages Header */}
                <div className="grid">
                    <MessagesHeader />
                </div>
                <div>
                    <Messages />
                </div>
                <div className="grid sticky bottom-0">
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}