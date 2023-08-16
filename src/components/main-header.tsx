import { SparklesIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function MainHeader() {
      return (
        <div className='grid grid-flow-col grid-cols-[1fr] gap-6 px-8 h-full place-content-center items-center bg-white dark:bg-redax-dark'>
            <Button noBackground text='New chat session' icon={<SparklesIcon />} />
        </div>
    )
}