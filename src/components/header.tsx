import { Bars3Icon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ReactComponent as Logo } from '../assets/logo.svg';
import Button from './button';
import Overlay from './overlay';
import { useNavigate } from 'react-router-dom'
import Contact from '../views/contact';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='grid col-span-full bg-white h-16 sticky top-0 border-b border-slate-200 px-4 sm:px-8'>
            <div className='grid h-full w-full mx-auto max-w-7xl items-center justify-items-start grid-cols-[1fr_auto]'>
                <div onClick={() => navigate('/')} className='grid grid-flow-col gap-2 items-center select-none cursor-pointer'>
                    <Logo className='logo w-6 h-6' />    
                    <p className='text-zinc-800 font-bold text-xl tracking-tight'>Goodeye</p>
                </div>
                <div className='grid grid-flow-col gap-10'>
                    <div onClick={() => navigate('/services')} className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                        <p className='text-sm font-semibold text-slate-700 group-hover:text-blue-400'>Services</p>
                    </div>
                    <div onClick={() => navigate('/projects')} className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                        <p className='text-sm font-semibold text-slate-700 group-hover:text-blue-400'>Projects</p>
                    </div>
                    <div onClick={() => navigate('/about')} className='group transition-all duration-75 items-center cursor-pointer hidden md:grid grid-flow-col gap-2 select-none'>
                        <p className='text-sm font-semibold text-slate-700 group-hover:text-blue-400'>About</p>
                    </div>
                    <Overlay overlayType={'popup'} content={<Contact />}>
                        <div>
                            <Button
                                icon={<HandRaisedIcon />}
                                text='Get in touch'
                            />
                        </div>
                    </Overlay>
                    <Overlay overlayType={'drawer-right'} content={<div><p>Side menu</p></div>}>
                        <div className='group transition-all duration-75 items-center cursor-pointer grid md:hidden select-none'>
                            <Bars3Icon className="h-6 w-6 text-zinc-800 group-hover:text-blue-400" />
                        </div>
                    </Overlay>
                </div>
            </div>
        </div>
    )
}

export default Header