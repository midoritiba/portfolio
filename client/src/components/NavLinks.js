import {HashLink as Link} from 'react-router-hash-link'
import { MdWbSunny,  MdDarkMode} from 'react-icons/md';
import { DarkModeContext } from '../context/DarkModeContext';
import { useContext } from 'react';

const NavLinks = ({setHamburgerMenu, hamburgerMenu}) => {

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    const handleClick = () =>{
        toggleDarkMode();
    }

    const icon = darkMode ? <MdDarkMode size={20}  style={{color: 'blueviolet', cursor: 'pointer'}}/ > : <MdWbSunny size={20} style={{color: '#D96525', cursor: 'pointer'}}/ >;

    return (

    <ul>
        <li onClick={() => setHamburgerMenu(!hamburgerMenu)}>
            <Link to='#home'>home</Link>
        </li>
        <li onClick={() => setHamburgerMenu(!hamburgerMenu)}>
            <Link to='#projects'>projects</Link>
        </li>
        <li onClick={() => setHamburgerMenu(!hamburgerMenu)}>
            <Link to='#about'>about me</Link>
        </li>
        <li onClick={() => setHamburgerMenu(!hamburgerMenu)}>
            <Link to='#contact'>contact</Link>
        </li>
        <li>
            <div className="nav-icons" onClick={handleClick}>
                {icon}
            </div>
        </li>
    </ul>

  )
}

export default NavLinks