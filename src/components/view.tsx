import Header from "./header"
import Footer from "./footer"
import { XMarkIcon } from '@heroicons/react/24/outline'

type modalViewProps = {
    children: any,
    title?: string,
    closeOverlay?: any,
}

export function ModalView({ children, closeOverlay, title }:modalViewProps) {
    return (
        <div className='grid grid-rows-[auto_1fr]'>
            <div className='border-b border-slate-200 h-[4rem] grid col-span-full grid-flow-col items-center grid-cols-[4rem_1fr_4rem]'>
                <div>
                    
                </div>
                <div className="w-full grid justify-center">
                    <p className='font-bold text-lg text-zinc-600 tracking-tight'>{title}</p>
                </div>
                <div onClick={closeOverlay} className="h-[4rem] w-[4rem] grid place-content-center select-none hover:text-sky-400 cursor-pointer">
                    <XMarkIcon className="h-6 w-6" />
                </div>
            </div>
            <div className="grid px-2 md:px-6 pb-[4rem] h-full overflow-y-auto">
                {children}
            </div>
        </div>
    )
}

type viewProps = {
    children: any,
    noFooter?:boolean,
}

function View({ children, noFooter }:viewProps) {
    return (
        <div className='w-screen h-screen grid grid-cols-1 grid-rows-[4rem_1fr] bg-white dark:bg-zinc-900 overflow-y-auto'>
            <Header />
            <div className="grid w-full max-w-10xl mx-auto">
                {children}
                {
                    !noFooter &&
                        <Footer />  
                }
            </div>
        </div>
    )
}

export default View