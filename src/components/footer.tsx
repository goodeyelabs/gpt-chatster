import Image from "next/image"

function Footer() {
    return (
        <div className='grid col-span-full md:h-24 px-4 md:px-8 py-8 md:py-0 bg-slate-100 md:bg-white'>
            <div className='grid h-full w-full mx-auto max-w-7xl items-center justify-items-center md:justify-items-start grid-cols-[1fr] md:grid-cols-[1fr_auto]'>
                <div className='grid order-2 md:order-1 justify-items-center md:justify-items-start md:grid-flow-col gap-1 md:gap-10'>
                    <div className='items-center grid'>
                        <p className='text-sm text-zinc-500'>Goodeye Labs &copy; 2023</p>
                    </div>
                    <div className='items-center grid grid-flow-col gap-2'>
                        <p className='text-sm text-zinc-500'>Made in</p>
                        <Image 
                            src='/uk-flag.svg'
                            alt='UK Flag'
                            width='64'
                            height='64'
                            className='flag'
                        />
                    </div>
                  </div>
                  <div className='order-1 md:order-2 grid md:grid-flow-col gap-2 items-center pb-4 md:py-0'>
                        <Image 
                            src='/logo.svg'
                            alt='Logo'
                            width='64'
                            height='64'
                            className='bg-white md:bg-none rounded-full md:rounded-none p-2 md:p-0 w-12 h-12 md:w-6 md:h-6'
                        />
                  </div>
            </div>
        </div>
    )
}

export default Footer