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
        <div className="grid grid-rows-[4rem_1fr] grid-cols-[minmax(auto,380px)_1fr] min-h-screen min-h-screen-ios">
            <div className="grid row-start-1 row-span-full col-start-1 shadow-[1px_0_0_0] shadow-neutral-200 sticky top-0 h-screen h-screen-ios overflow-y-auto">
                <div className="grid h-[2000px]">
                    <p>Side content</p>
                </div>
            </div>
            <div className="grid row-start-1 col-start-2 shadow-[0_1px_0_0] shadow-neutral-200 sticky top-0">
                <p>Main header</p>
            </div>
            <div className="grid row-start-2 col-start-2">
                <div className="grid grid-rows-[1fr_4rem]">
                    <div className="grid">
                        <div className="grid h-[2000px]">
                            <p>Main content</p>
                        </div>
                    </div>
                    <div className="grid shadow-[0_-1px_0_0] shadow-neutral-200 sticky bottom-0">
                        <p>Main footer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}