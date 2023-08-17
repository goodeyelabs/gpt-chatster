import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"
import Messages from "./messages"
import MessageInput from "./message-input"
import Header from "./header"
import Overlay from "./overlay"

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

        <div className="grid min-h-screen grid-rows-[4rem_1fr]">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white place-content-center">
                <Overlay overlayType="drawer-left" content={<SideBar />}>
                    <p>Open sidebar</p>
                </Overlay>
            </div>
            <div className="grid grid-rows-[1fr_auto]">
                {/* <div className="grid sticky top-[4rem] place-content-center bg-neutral-50">
                    <Overlay overlayType="drawer-left" content={<SideBar />}>
                        <p>Open sidebar</p>
                    </Overlay>
                </div> */}
                <div className="grid">
                    <Messages />
                </div>
                <div className="grid sticky bottom-0 min-h-[5rem] md:min-h-[4rem]">
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}