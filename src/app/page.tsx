// import View from '../components/view'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='grid h-screen w-screen place-content-center'>
        <Image 
          src='/logo.svg'
          alt='Logo'
          width='64'
          height='64'
          className='logo'
        />
      </div>
    </>
  )
}
