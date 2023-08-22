import Messages from "./messages"
import MessageInput from "./message-input"
import NewHeader from "./header"
import Conversations from "./conversations"
import SendFeedback from "./conversations-footer"
import ConversationsHeader from "./conversations-header"
import MessagesHeader from "./messages-header"
import Header from "./header"

type viewProps = {
    children?: any,
}

function SideBar() {
    return (
        <div className="grid grid-rows-[3.5rem_1fr] shadow-[1px_0_0_0] shadow-neutral-200">
            <div className="grid shadow-[0_1px_0_0] shadow-neutral-200 sticky top-[3.5rem]">
                <p>Side header</p>
            </div>
            <div className="grid grid-rows-[1fr_3.5rem] overflow-y-auto h-full">
                <div className="grid h-[2000px]">
                    <p>Side content</p>
                </div>
                <div className="grid shadow-[0_-1px_0_0] shadow-neutral-200 sticky bottom-0">
                    <p>Side footer</p>
                </div>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className="grid grid-rows-[3.5rem_1fr]">
            <div className="grid shadow-[0_1px_0_0] shadow-neutral-200 sticky top-[3.5rem]">
                <p>Main header</p>
            </div>
            <div className="grid grid-rows-[1fr_3.5rem]">
                <div className="grid h-[1px]">
                    <p>Main content</p>
                </div>
                <div className="grid shadow-[0_-1px_0_0] shadow-neutral-200">
                    <p>Main footer</p>
                </div>
            </div>
        </div>
    )
}

export default function View({ children }:viewProps) {    
    return (
        <div className="grid grid-rows-[3.75rem_1fr] grid-cols-[minmax(auto,380px)_1fr] h-screen h-screen-ios">
            <div className="z-20 grid row-start-1 col-span-full shadow-[0_1px_0_0] shadow-neutral-200">
                <Header />
            </div>
            <div className="z-10 grid row-start-2 col-start-1 shadow-[1px_0_0_0] shadow-neutral-200/80 dark:shadow-redax-lighter bg-blue-25 dark:bg-redax-medium overflow-y-auto">
                <div className="grid grid-rows-[1fr_auto]">
                    <div className="grid h-full grid-rows-[auto_1fr]">
                        <div className="grid sticky top-0">
                            <ConversationsHeader />
                        </div>
                        <div className="grid items-start">
                            <Conversations />
                        </div>
                    </div>
                    <div className="grid sticky bottom-0 bg-blue-25 shadow-[0_-1px_0_0] shadow-neutral-200/80">
                        <SendFeedback />
                    </div>
                </div>
            </div>
            <div className="z-0 grid row-start-2 col-start-2 shadow-[1px_0_0_0] shadow-neutral-200 bg-white overflow-y-auto">
                <div className="grid grid-rows-[1fr_auto]">
                    <div className="grid h-full grid-rows-[auto_1fr]">
                        <div className="grid">
                            <MessagesHeader />
                        </div>
                        <div className="grid items-start">
                            <Messages />
                        </div>
                    </div>
                    <div className="grid sticky bottom-0 bg-blue-25">
                        <MessageInput />
                    </div>
                </div>
            </div>
        </div>
    )
}