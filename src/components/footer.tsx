import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <div className='grid col-span-full md:h-24 px-4 md:px-8 py-8 md:py-0 bg-slate-100 md:bg-white'>
            <div className='grid h-full w-full mx-auto max-w-7xl items-center justify-items-center md:justify-items-start grid-cols-[1fr] md:grid-cols-[1fr_auto]'>
                <div className='grid order-2 md:order-1 justify-items-center md:justify-items-start md:grid-flow-col gap-1 md:gap-10'>
                    <div className='items-center grid'>
                        <p className='text-sm text-zinc-500'>GPT Chatster &copy; 2023</p>
                    </div>
                    <div className='items-center grid grid-flow-col gap-2'>
                        <p className='text-sm text-zinc-500'>Made by</p>
                        <Image 
                            src='/logo.svg'
                            alt='Goodeye Labs'
                            width='64'
                            height='64'
                            className='bg-white md:bg-none rounded-full md:rounded-none p-[4px] md:p-0 w-8 h-8 md:w-6 md:h-6'
                        />
                    </div>
                  </div>
                  <div className='order-1 md:order-2 grid md:grid-flow-col gap-2 items-center pb-4 md:py-0'>
                        <Image 
                            src='/logo.png'
                            alt='Logo'
                            width='64'
                            height='69'
                            className=' p-2 md:p-0 w-12 h-fill md:w-6 md:h-fit'
                        />
                  </div>
            </div>
        </div>
    )
}

export default Footer