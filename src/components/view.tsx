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
        <div className="grid h-screen h-screen-ios grid-rows-[4rem_1fr_4rem] grid-cols-[minmax(auto,400px)_1fr]">
            {/* Main header */}
            <div className="grid col-start-2 col-span-full shadow-[0_1px_0_0] shadow-neutral-200">Main header</div>
            {/* Side header */}
            <div className="grid col-start-1 row-start-1 shadow-[1px_0_0_0] shadow-neutral-200">Side header</div>
            {/* Main content */}
            <div className="grid col-start-2 row-start-2 overflow-y-auto">
                <div className="grid h-[2000px]">
                    <p>Main content</p>
                </div>
            </div>
            {/* Side content */}
            <div className="grid col-start-1 row-start-2 row-span-2 shadow-[1px_0_0_0] shadow-neutral-200">Side content</div>
            {/* Main footer */}
            <div className="grid col-start-2 row-start-3">Main footer</div>
            {/* Side footer */}
            <div className="grid col-start-1 row-start-3">Side footer</div>
        </div>
    )
}