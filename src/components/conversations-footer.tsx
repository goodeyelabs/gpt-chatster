import { InformationCircleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function ConversationsFooter() {
    return (
        <div className='grid w-full h-[var(--footer-height)] gap-3 grid-flow-col justify-stretch px-5 md:px-6 xl:px-8 bg-white items-center'>
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