import View from '../../components/view'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services - RedaxGPT - Goodeye Labs',
}
export default function Home() {
  return (
    <View>
          <div className='grid place-content-center h-screen px-4 sm:px-8 pb-32 border-b border-slate-200'>
              <h1 className='text-zinc-800 font-bold text-6xl sm:text-8xl tracking-tighter'>Services</h1>
          </div>
          <div className='grid place-content-center h-screen bg-slate-50 border-b border-slate-200'>
              <h1 className='text-zinc-800 font-bold text-6xl sm:text-8xl tracking-tighter'>Goodeye</h1>
          </div>
          <div className='grid place-content-center h-screen'>
              <h1 className='text-zinc-800 font-bold text-6xl sm:text-8xl tracking-tighter'>Goodeye</h1>
          </div>
      </View>
  )
}
