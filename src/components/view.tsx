import Messages from "./messages"
import MessageInput from "./message-input"
import NewHeader from "./header"
import Conversations from "./conversations"
import SendFeedback from "./send-feedback"
import ConversationsHeader from "./conversations-header"
import MessagesHeader from "./messages-header"

type viewProps = {
    children?: any,
}

export function SideBar() {
    return (
        <div />
    )
}

export default function View({ children }:viewProps) {    
    return (
        <div className='grid w-screen h-screen h-screen-ios grid-rows-[auto_1fr] grid-cols-[minmax(auto,400px)_1fr] dark:bg-redax'>
            <div className='grid sticky z-30 top-0 col-start-1 col-span-full'>
                <NewHeader />
            </div>
            <div className="grid z-10 grid-rows-[auto_1fr] h-full overflow-y-auto shadow-[1px_0_0_0] shadow-gray-200 dark:shadow-redax-light bg-white dark:bg-redax-medium">
                {/* Sidebar Header */}
                <div className="grid sticky top-0">
                    <ConversationsHeader />
                </div>
                {/* Sidebar content */}
                <div>
                    <Conversations />
                </div>
                {/* Sidebar dock */}
                <div className="grid sticky bottom-0">
                    <SendFeedback />
                </div>
            </div>
            <div className="grid h-full overflow-y-auto grid-rows-[auto_1fr]">
                {/* Main header */}
                <div className="grid">
                    <MessagesHeader />
                </div>
                {/* Main content */}
                <div>
                    <Messages />
                </div>
                {/* Main dock */}
                <div className="grid sticky bottom-0">
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}