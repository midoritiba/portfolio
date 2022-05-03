import NavLinks from "./NavLinks"
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import {HashLink as Link} from 'react-router-hash-link'
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

const NavigationMobile = () => {

    const[hamburgerMenu, setHamburgerMenu] = useState(false)
    const{darkMode} = useContext(DarkModeContext)

    return (
        <nav id='#nav' className={darkMode ? `nav-mobile nav-dark` : `nav-mobile nav-light`}>

            <div className="brand-name">
                <Link to='#home' className='brand-text'>michelle tiba</Link>
            </div>

            {hamburgerMenu && 
                <NavLinks 
                    hamburgerMenu={hamburgerMenu} 
                    setHamburgerMenu={setHamburgerMenu}
                />
            }
            <Hamburger
                    toggled={hamburgerMenu}
                    toggle={setHamburgerMenu}
                    rounded
                    label="Show menu"
                    direction="right" 
                    color={darkMode ? 'white' : 'black'}
        />
        </nav>
    )
}

export default NavigationMobile