import { Cog8ToothIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import RoundButton from "./round-button";

export default function SideFooter() {
    return (
        <div className='grid grid-flow-col grid-cols-[1fr_auto_auto_auto] gap-6 border-t border-none border-slate-200 dark:border-neutral-800/80 px-8 items-center'>
            <RoundButton icon={<Cog8ToothIcon />} />
            <RoundButton icon={<MoonIcon />} />
            <RoundButton icon={<SunIcon />} />
            <RoundButton icon={<ComputerDesktopIcon />} />
        </div>
    )
}