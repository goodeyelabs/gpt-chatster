import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"
import Header from "./header"

type viewProps = {
    children?: any,
}

export function SideBar() {
    return (
        <div id='sidebar' className="grid sticky top-0 overflow-y-auto grid-rows-[5rem_1fr_auto] h-full w-full border-r border-slate-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-redax-light">
            {/* <Banner />
            <Sessions />
            <SideFooter /> */}
        </div>
    )
}

function AppView({ children }:viewProps) {    
    return (
        <div id='view' className='grid grid-cols-[1fr] md:grid-cols-[400px_1fr] grid-rows-[4.25rem_1fr] h-screen h-screen-ios overflow-y-hidden'>
            <div id='header' className='grid col-span-2'>
                <Header />
            </div>
            <SideBar />
            <div id='main' className='grid w-full h-full overflow-y-auto grid-rows-[5rem_1fr_auto] bg-white dark:bg-redax-dark'>
                <MainHeader />
                <Messages />
                <MessageInput />
            </div>
        </div>
    )
}

export default AppView