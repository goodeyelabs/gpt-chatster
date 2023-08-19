import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"
import Header from "./header"
import Overlay from "./overlay"
import NewHeader from "./new-header"
import ChatButton from "./chat-button"
import Conversations from "./conversations"

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
        // <div className="grid h-screen h-screen-ios grid-rows-[auto_1fr] grid-cols-[minmax(auto,400px)_1fr] transform-gpu">
        //     <div className="grid sticky top-0 col-start-1 col-span-2 shadow-[0_1px_0_0] shadow-gray-200 bg-white z-30">
        //         <NewHeader />
        //     </div>
        //     <div className="sticky top-[4rem] grid col-start-1 row-start-2 row-span-2 z-20 h-full shadow-[1px_0_0_0] shadow-gray-200 overflow-y-auto">
        //         <div className="grid h-full grid-rows-[1fr_auto]">
        //             <div className="grid">
        //                 <Sessions />
        //             </div>
        //             <div className="grid sticky bottom-0">
        //                 <ChatButton />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="sticky top-[4rem] grid col-start-2 row-start-2 row-span-2 h-full shadow-[1px_0_0_0] shadow-gray-200 overflow-y-auto">
        //         <div className="grid h-full grid-rows-[1fr_auto]">
        //             <div className="grid">
        //                 <Messages />
        //             </div>
        //             <div className="grid sticky bottom-0">
        //                 <MessageInput />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className='grid w-screen h-screen h-screen-ios grid-rows-[4rem_1fr] grid-cols-[minmax(auto,375px)_1fr]'>
        //     {/* //  Header */}
        //     <div className='grid sticky z-30 top-0 col-start-1 col-span-full shadow-[0_1px_0_0] shadow-gray-200'>
        //         <NewHeader />
        //     </div>
        //     {/* Sidebar */}
        //     <div className='grid z-20 h-full overflow-y-auto scroll-smooth col-start-1 row-start-2 shadow-[1px_0_0_0] shadow-gray-200'>
        //         <Conversations />
        //         <Sessions />
        //         <Sessions />
        //         <Sessions />
        //     </div>
        //     {/* // Main */}
        //     <div className='grid grid-rows-[1fr_auto] overflow-y-auto scroll-smooth col-start-2 row-start-2'>
        //         {/* // Content */}
        //         <div className='grid row-start-1'>
        //             <Messages />
        //         </div>
        //         {/* // Footer */}
        //         <div className='grid sticky bottom-0 row-start-2'>
        //             <MessageInput />
        //         </div>
        //     </div>
        // </div>

        <div className='grid w-screen h-screen h-screen-ios grid-rows-[4rem_1fr] grid-cols-[minmax(auto,375px)_1fr]'>
            <div className='grid sticky z-30 top-0 col-start-1 col-span-full shadow-[0_1px_0_0] shadow-gray-200'>
                <NewHeader />
            </div>
            <div className="grid z-10 h-full overflow-y-auto scroll-smooth shadow-[1px_0_0_0] shadow-gray-200">
                <Sessions />
            </div>
            <div className="grid h-full overflow-y-auto scroll-smooth grid-rows-[1fr_auto]">
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