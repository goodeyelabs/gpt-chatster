import { SparklesIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function MessagesHeader() {
    return (
        <div className='grid h-[var(--sub-header-height)] gap-3 grid-flow-col px-5 md:px-6 xl:px-12 backdrop-blur-lg bg-white/50 border-t border-neutral-200 border-none items-center'>
            <div className='grid gap-3 grid-flow-col place-content-center text-neutral-500/50'>
                <SparklesIcon className="w-5 h-5"/>
                <p className="text-sm font-medium tracking-slight">Conversation started</p>
                <SparklesIcon className="w-5 h-5 rotate-180"/>
            </div> 
        </div>
    )
}