import RoundButton from "./round-button";
import DarkModeSwitch from "./dark-mode-switch";
import UserAvatar from "./user";
import Overlay from "./overlay";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Button from "./button";

function SettingsMenu() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <Cog8ToothIcon className='w-16 h-16 text-slate-500' />
                <p className='text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400'>GPT/redaction engine settings on the way...</p>
            </div>
        </div>
    )
}

export default function MainHeader() {
      return (
        <div className='sticky top-0 grid grid-flow-col grid-cols-[1fr_auto_auto] gap-6 px-8 h-[5rem] justify-items-start items-center bg-white dark:bg-redax-dark'>
            <Overlay overlayType='popup' title='RedaxGPT settings' content={<SettingsMenu />}>
                <Button text='GPT 3.5 Turbo' icon={<Cog8ToothIcon />} />
            </Overlay>
            <DarkModeSwitch />
            <RoundButton icon={<UserAvatar />} />
        </div>
    )
}