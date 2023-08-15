import { Cog8ToothIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import RoundButton from "./round-button";

export default function SideFooter() {
    return (
        <div className='grid grid-flow-col grid-cols-[1fr_auto_auto_auto] gap-6 border-t border-stone-700/60 px-8 py-6'>
            <RoundButton icon={<Cog8ToothIcon />} />
            <RoundButton icon={<MoonIcon />} />
            <RoundButton icon={<SunIcon />} />
            <RoundButton icon={<ComputerDesktopIcon />} />
        </div>
    )
}