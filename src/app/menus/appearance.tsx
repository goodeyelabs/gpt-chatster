import { MoonIcon } from "@heroicons/react/24/outline";

export default function Appearance() {
    return (
        <div className='grid place-content-center'>
            <div className='grid items-center place-content-center justify-items-center gap-4'>
                <MoonIcon className='w-16 h-16 text-neutral-500' />
                <p className='text-sm font-base tracking-slight text-neutral-700 dark:text-slate-400'>Appearance settings are on the way...</p>
            </div>
        </div>
    )
}