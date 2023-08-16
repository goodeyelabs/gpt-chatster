import DarkModeSwitch from "./dark-mode-switch";
import UserAvatar from "./user";
import Overlay from "./overlay";
import { Cog8ToothIcon, SparklesIcon } from "@heroicons/react/24/outline";
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
        <div className='grid grid-flow-col grid-cols-[1fr] gap-6 px-8 h-full place-content-center items-center bg-white dark:bg-redax-dark'>
            <Button noBackground text='New chat session' icon={<SparklesIcon />} />
        </div>
    )
}