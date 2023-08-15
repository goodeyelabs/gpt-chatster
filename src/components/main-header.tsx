import { Cog8ToothIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import RoundButton from "./round-button";

export default function MainHeader() {
    return (
        <div className='grid grid-flow-col grid-cols-[1fr_auto_auto_auto] gap-6 px-8 h-[5rem] items-center'>
            <div />
            <RoundButton icon={<MoonIcon />} />
            <RoundButton icon={<SunIcon />} />
            <RoundButton icon={<ComputerDesktopIcon />} />
        </div>
    )
}