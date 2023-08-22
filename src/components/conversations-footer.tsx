import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import Overlay from "./overlay";

export default function ConversationsFooter() {
    return (
        <div className='grid w-full h-[var(--footer-height)] gap-3 grid-flow-col justify-stretch px-5 md:px-6 xl:px-8 bg-white items-center'>
            <Overlay overlayType='popup' title='Share feedback' content={<div />}>
                <Button 
                    icon={<LightBulbIcon />} 
                    text='Share feedback' 
                    dontHideText
                />
            </Overlay>
            <Overlay overlayType='popup' title='About' content={<div />}>
                <Button 
                    icon={<InformationCircleIcon />} 
                    text='About' 
                    dontHideText
                />
            </Overlay>
        </div>
    )
}