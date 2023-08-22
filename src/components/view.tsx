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

export default function View({ children }:viewProps) {    
    return (
        <div className="grid grid-rows-[3.5rem_3.5rem_1fr_3.5rem] grid-cols-[minmax(auto,380px)_1fr] h-screen h-screen-ios">
            <div className="grid row-start-1 col-start-1 col-span-full shadow-[0_1px_0_0] shadow-neutral-200">

            </div>
            <div className="grid row-start-2 row-span-3 col-start-1 shadow-[1px_0_0_0] shadow-neutral-200">

            </div>

            <div className="grid row-start-3 col-start-1 shadow-neutral-200">
                <p>Side content</p>
            </div>

            <div className="grid row-start-2 col-start-1 shadow-[0_1px_0_0] shadow-neutral-200">

            </div>
            <div className="grid row-start-4 col-start-1 shadow-[0_-1px_0_0] shadow-neutral-200">

            </div>

            <div className="grid row-start-2 col-start-2 shadow-[0_1px_0_0] shadow-neutral-200">

            </div>

            <div className="grid row-start-3 col-start-2 shadow-neutral-200">
                <p>Main content</p>
            </div>

            <div className="grid row-start-4 col-start-2 shadow-[0_-1px_0_0] shadow-neutral-200">

            </div>
        </div>
    )
}