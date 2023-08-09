import View from '../components/view'
import Image from 'next/image'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'GPT Chatster - Goodeye Labs',
}

export default function Home() {
  return (
    <View>
      <div className='grid h-screen w-screen place-content-center pb-[4rem]'>
        <Image 
          src='/logo.png'
          alt='Logo'
          width='100'
          height='100'
          className='logo'
        />
      </div>
    </View>
  )
}
