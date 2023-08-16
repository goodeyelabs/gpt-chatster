import { PaperAirplaneIcon, StarIcon } from "@heroicons/react/24/outline";
import Overlay from "./overlay";
import Button from "./button";

function UpgradeMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <StarIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Upgrade options are on the way...</p>
            </div>
        </div>
    )
}

function FeedbackMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <PaperAirplaneIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Send feedback functionality is on the way...</p>
            </div>
        </div>
    )
}

export default function SideFooter() {
    return (
        <div className="px-8 py-8 grid grid-flow-col grid-cols-[1fr_auto] gap-6">
            <Overlay overlayType='popup' title='Upgrade to Enterprise' content={<UpgradeMenu />}>
                <Button icon={<StarIcon />} text='Upgrade' />
            </Overlay>
            <Overlay overlayType='popup' title='Send feedback' content={<FeedbackMenu />}>
                <Button icon={<PaperAirplaneIcon />} text='Send feedback' />
            </Overlay>
        </div>
    )
}