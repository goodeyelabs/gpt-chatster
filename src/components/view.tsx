import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"
import Header from "./header"
import Overlay from "./overlay"
import NewHeader from "./new-header"

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
        <div className="grid min-h-screen min-h-screen-ios grid-rows-[auto_1fr_auto] transform-gpu">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white">
                <NewHeader />
            </div>
            <div className="grid h-full">
                <Messages />
            </div>
            <div className="grid sticky bottom-0 min-h-[4rem]">
                <MessageInput />
            </div>
        </div>
    )
}