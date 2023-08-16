import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"

type viewProps = {
    children: any,
}

function AppView({ children }:viewProps) {    
    return (
        <div id='view' className='grid grid-cols-[400px_1fr] grid-rows-1'>
            <div id='sidebar' className="sticky top-0 overflow-y-auto grid grid-rows-[5rem_1fr_auto] h-screen w-full border-r border-slate-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-redax-light">
                <Banner />
                <Sessions />
                <SideFooter />
            </div>
            <div id='main' className='grid w-full grid-rows-[5rem_1fr_auto] bg-white dark:bg-redax-dark'>
                <MainHeader />
                <Messages />
                <MessageInput />
            </div>
        </div>
    )
}

export default AppView