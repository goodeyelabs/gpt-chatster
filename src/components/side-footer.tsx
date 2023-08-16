import { Cog8ToothIcon, ComputerDesktopIcon, GiftIcon, MoonIcon, PaperAirplaneIcon, SunIcon } from "@heroicons/react/24/outline";
import Overlay from "./overlay";
import Button from "./button";

export default function SideFooter() {

    return (
        <div className="px-8 py-8 grid grid-flow-col grid-cols-[1fr_auto] gap-6">
            <Overlay overlayType='popup' title='Upgrade to Enterprise' content={<div />}>
                <Button icon={<GiftIcon />} text='Upgrade' />
            </Overlay>
            <Overlay overlayType='popup' title='Send feedback' content={<div />}>
                <Button icon={<PaperAirplaneIcon />} text='Send feedback' />
            </Overlay>
        </div>
    )
}