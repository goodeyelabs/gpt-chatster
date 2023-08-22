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
        <div className="grid grid-rows-[4rem_1fr]">
            <div className="grid row-start-1 shadow-[0_1px_0_0] shadow-neutral-200 sticky top-0">
                <p>Main header</p>
            </div>
            <div className="grid row-start-2">
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