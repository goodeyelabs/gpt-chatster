import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import Overlay from "./overlay";
import About from "@/app/menus/about";
import Feedback from "@/app/menus/feedback";

export default function ConversationsFooter() {
    return (
        <div className='grid w-full h-[var(--footer-height)] gap-3 grid-flow-col justify-stretch px-5 md:px-6 xl:px-8 bg-white items-center'>
            <Overlay overlayType='popup' title='Share feedback' content={<Feedback />}>
                <Button 
                    icon={<LightBulbIcon />} 
                    text='Share feedback' 
                    dontHideText
                />
            </Overlay>
            <Overlay overlayType='popup' title='About' content={<About />}>
                <Button 
                    icon={<InformationCircleIcon />} 
                    text='About' 
                    dontHideText
                />
            </Overlay>
        </div>
    )
}