import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function SendFeedback() {
    return (
        <div className='grid w-full h-[var(--footer-height)] gap-3 grid-flow-col justify-stretch px-5 md:px-6 xl:px-8 backdrop-blur-lg shadow-[0_-1px_0_0] shadow-neutral-200 items-center'>
            <Button 
                icon={<LightBulbIcon />} 
                text='Share feedback' 
            />
            <Button 
                icon={<InformationCircleIcon />} 
                text='About' 
            />
        </div>
    )
}