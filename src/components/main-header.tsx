import RoundButton from "./round-button";
import DarkModeSwitch from "./dark-mode-switch";
import UserAvatar from "./user";

export default function MainHeader() {
      return (
        <div className='sticky top-0 grid grid-flow-col grid-cols-[1fr_auto] gap-6 px-8 h-[5rem] items-center bg-white dark:bg-redax-dark'>
            <div />
            <DarkModeSwitch />
            <RoundButton icon={<UserAvatar />} />
        </div>
    )
}