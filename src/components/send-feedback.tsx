import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function SendFeedback() {
    return (
        <div className='grid w-full h-[var(--footer-height)] gap-3 grid-flow-col justify-start px-5 md:px-6 xl:px-8 backdrop-blur-lg items-center'>
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