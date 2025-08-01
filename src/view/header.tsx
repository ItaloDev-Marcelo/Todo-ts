
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';
import { type modeProp } from '../types/modeProps';

const Header = ({mode, darkOrLight}:modeProp) => {

    const DarkModeIcon = mode ? Moon : Sun;

  return (
    <header className={mode ? 'bg-dark' : 'bg-light'}>
        <div className='flex justify-between px-7 md:px-[14.5em]  xl:px-[17em] nt:px-[20rem]  relative top-[2.5em]  md:top-[2.4em]  xl:top-[3.4em]'>
          <h1 className='text-[1.3em] md:text-[1.5em] xl:text-[2em] font-bold tracking-[.5em] text-Very-Light-Gray'>TODO</h1>
        <button onClick={darkOrLight}><img src={DarkModeIcon} /></button>
        </div>
    </header>
  )
}

export default Header