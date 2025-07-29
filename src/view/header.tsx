
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';
import { type modeProp } from '../types/modeProps';

const Header = ({mode, darkOrLight}:modeProp) => {

    const DarkModeIcon = mode ? Moon : Sun;

  return (
    <header>
        <h1>TODO</h1>
        <button onClick={darkOrLight} className='bg-red-500'><img src={DarkModeIcon} /></button>
    </header>
  )
}

export default Header