import { Cog8ToothIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Overlay from "./overlay";
import Button from "./button";

function SettingsMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <Cog8ToothIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>Model config & redaction entities on the way...</p>
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
        <div className="py-8 px-5 sm:px-8 grid grid-flow-col grid-cols-[1fr_auto] gap-4">
            <Overlay overlayType='popup' title='RedaxGPT settings' content={<SettingsMenu />}>
                <Button text='GPT 3.5 Turbo' icon={<Cog8ToothIcon />} />
            </Overlay>
            <Overlay overlayType='popup' title='Send feedback' content={<FeedbackMenu />}>
                <Button icon={<PaperAirplaneIcon />} text='Send feedback' />
            </Overlay>
        </div>
    )
}