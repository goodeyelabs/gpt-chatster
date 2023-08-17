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

export default function View({ children }:viewProps) {    
    return (
        // <div id='view' className='grid grid-cols-[1fr] md:grid-cols-[400px_1fr] grid-rows-[4.25rem_1fr] h-screen h-screen-ios overflow-y-hidden'>
        //     <div id='header' className='grid col-span-2'>
        //         <Header />
        //     </div>
        //     <SideBar />
        //     <div id='main' className='grid w-full h-full overflow-y-auto grid-rows-[5rem_1fr_auto] bg-white dark:bg-redax-dark'>
        //         <MainHeader />
        //         <Messages />
        //         <MessageInput />
        //     </div>
        // </div>

        <div className="grid h-screen h-screen-ios w-screen grid-rows-[4rem_1fr] overflow-y-auto overscroll-contain">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white z-10"></div>
            <div className="grid grid-rows-[4rem_1fr_4rem]">
                <div className="grid sticky top-0 items-center">
                    <p>Top</p>
                </div>
                <div className="grid">
                    <div className="grid h-screen place-content-center">
                        <p>Middle</p>
                    </div>
                    <div className="grid h-screen place-content-center">
                        <p>Middle</p>
                    </div>
                    <div className="grid h-screen place-content-center">
                        <p>Middle</p>
                    </div>
                </div>
                <div className="grid sticky bottom-0 items-center border-t border-gray-200 bg-white z-10">
                    <p>Bottom</p>
                </div>
            </div>
        </div>
    )
}