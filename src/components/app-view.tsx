import Sessions from "./sessions"
import Banner from "./banner"
import SideFooter from "./side-footer"
import MainHeader from "./main-header"

type viewProps = {
    children: any,
}

function AppView({ children }:viewProps) {
    return (
        <div id='view' className='grid grid-cols-[400px_1fr] grid-rows-1 bg-stone-900'>
            <div id='sidebar' className="sticky top-0 overflow-y-auto grid grid-rows-[5rem_1fr_auto] h-screen w-full border-r border-stone-700/50 bg-stone-700/20">
                <Banner />
                <Sessions />
                <SideFooter />
            </div>
            <div id='main' className='grid h-screen w0-full'>
                <MainHeader />
            </div>
        </div>
    )
}

export default AppView