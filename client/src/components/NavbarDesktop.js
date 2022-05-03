import NavLinks from "./NavLinks"
import {HashLink as Link} from 'react-router-hash-link'
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

const NavigationDesktop = () => {

  const {darkMode} = useContext(DarkModeContext)

  return (
      <nav className={darkMode ? `nav-desktop nav-dark` : `nav-desktop nav-light`}>
          <div className="brand-name">
            <Link to='#home' className='brand-text'>michelle tiba</Link>
          </div>
          <NavLinks />
      </nav>
  )
}

export default NavigationDesktop