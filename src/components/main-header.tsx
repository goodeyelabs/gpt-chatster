import RoundButton from "./round-button";
import DarkModeSwitch from "./dark-mode-switch";
import UserAvatar from "./user";
import Overlay from "./overlay";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

export default function MainHeader() {
      return (
        <div className='sticky top-0 grid grid-flow-col grid-cols-[1fr_auto_auto] gap-6 px-8 h-[5rem] items-center bg-white dark:bg-redax-dark'>
            <Overlay overlayType='popup' title='RedaxGPT settings' content={<div />}>
                <RoundButton icon={<Cog8ToothIcon />} />
            </Overlay>
            <DarkModeSwitch />
            <RoundButton icon={<UserAvatar />} />
        </div>
    )
}